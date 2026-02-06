import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load service account from file if it exists
const SERVICE_ACCOUNT_FILE = path.join(__dirname, 'service-account.json');


const getAuth = () => {
    // Priority 1: Service Account JSON from Env Variable (Most reliable)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
        try {
            const creds = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
            console.log('[Auth] Loaded credentials from GOOGLE_SERVICE_ACCOUNT_JSON');
            return new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes: [
                    'https://www.googleapis.com/auth/spreadsheets',
                ],
            });
        } catch (error) {
            console.error("Error parsing GOOGLE_SERVICE_ACCOUNT_JSON:", error);
        }
    }

    // Priority 2: Service Account File
    if (fs.existsSync(SERVICE_ACCOUNT_FILE)) {
        try {
            // ESM dynamic import is async, but we need sync here or await init
            // For simplicity in refactoring, we'll read JSON directly
            const creds = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_FILE, 'utf8'));
            console.log('[Auth] Loaded credentials from service-account.json');
            return new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes: [
                    'https://www.googleapis.com/auth/spreadsheets',
                ],
            });
        } catch (error) {
            console.error("Error loading service-account.json:", error);
        }
    }

    // Priority 3: Legacy Environment Variables
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
        let privateKey = process.env.GOOGLE_PRIVATE_KEY;
        
        // Remove surrounding quotes if user pasted them
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.slice(1, -1);
        }
        
        // Replace literal \n with actual newlines
        privateKey = privateKey.replace(/\\n/g, '\n');

        console.log(`[Auth] Loaded credentials from legacy env vars. Key length: ${privateKey.length}`);
        
        return new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: privateKey,
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });
    }

    return null;
};

export const checkSheetsConnection = async () => {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    if (!spreadsheetId) {
        return { success: false, error: "GOOGLE_SPREADSHEET_ID missing" };
    }

    const serviceAccountAuth = getAuth();
    if (!serviceAccountAuth) {
        return { success: false, error: "No valid credentials found" };
    }

    try {
        const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
        await doc.loadInfo();
        console.log(`[Sheets] Successfully connected to: ${doc.title}`);
        return { success: true, title: doc.title };
    } catch (error) {
        console.error("[Sheets] Connection failed:", error.message);
        return { success: false, error: error.message };
    }
};

export const appendToSheet = async (sheetKey, rowData) => {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
        console.warn("Skipping Google Sheets: GOOGLE_SPREADSHEET_ID not set.");
        return { success: false, error: "GOOGLE_SPREADSHEET_ID missing" };
    }

    // Resolve Sheet Name from Environment Variable
    // sheetKey will be 'CONTACT', 'EVENT', or 'SCHEDULE'
    const envVarName = `SHEET_${sheetKey}`;
    const envValue = process.env[envVarName];

    if (!envValue) {
        console.warn(`Skipping Google Sheets: ${envVarName} not set in .env`);
        return { success: false, error: `${envVarName} missing` };
    }

    // Parse "SheetName!Range" -> "SheetName"
    const sheetTitle = envValue.includes('!') ? envValue.split('!')[0] : envValue;

    const serviceAccountAuth = getAuth();
    if (!serviceAccountAuth) {
        console.warn("Skipping Google Sheets: No valid credentials found (service-account.json or env vars).");
        return { success: false, error: "Credentials missing" };
    }

    try {
        const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

        await doc.loadInfo(); // loads document properties and worksheets

        let sheet = doc.sheetsByTitle[sheetTitle];
        console.log(`[Sheets] Accessing sheet: ${sheetTitle} (from ${envVarName})`);
        
        // specific headers for each sheet type if we need to create it
        let headers = [];
        if (sheetKey === 'CONTACT') {
            headers = ['DATE', 'NAME', 'EMAIL', 'PHONE', 'MESSAGE'];
        } else if (sheetKey === 'EVENT') {
            headers = ['DATE', 'P NAME', 'PHONE', 'MAIL', 'C NAME', 'C DOB', 'COLOR 1', 'COLOR 2', 'FLIP BRANCH', 'GUESTS'];
        } else if (sheetKey === 'SCHEDULE') {
            headers = ['DATE', 'P NAME', 'PHONE', 'MAIL', 'MEMBERSHIP', 'C NAME', 'C DOB', 'C SCHOOL', 'EM CONTACT NAME', 'EC PHONE', 'MESSAGE'];
        }

        if (!sheet) {
            console.error(`Sheet '${sheetTitle}' not found in the spreadsheet.`);
            return { success: false, error: `Sheet '${sheetTitle}' not found` };
        }

        // Check if headers are set. If the sheet is empty, headerValues might be empty or undefined.
        // We force load headers just in case
        await sheet.loadHeaderRow().catch(() => {
            // Ignore error if row 1 is empty, likely means no headers
        });
        
        if (!sheet.headerValues || sheet.headerValues.length === 0) {
            console.log(`Sheet '${sheetTitle}' exists but has no headers. Setting them...`);
            await sheet.setHeaderRow(headers);
        }

        await sheet.addRow(rowData);
        console.log(`Added row to Google Sheet: ${sheetTitle}`);
        return { success: true };
    } catch (error) {
        console.error("Error appending to Google Sheet:", error);
        return { success: false, error: error.message };
    }
};
