import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SERVICE_ACCOUNT_FILE = path.join(__dirname, "service-account.json");

/**
 * Create Google Service Account Auth from FILE
 */
const getAuth = () => {
  // Priority 1: Service Account File (Local Development or Explicit File Mount)
  if (fs.existsSync(SERVICE_ACCOUNT_FILE)) {
    try {
      const fileContent = fs.readFileSync(SERVICE_ACCOUNT_FILE, "utf8");
      const creds = JSON.parse(fileContent);
      console.log("[Auth] Loaded credentials from service-account.json");
      return new JWT({
        email: creds.client_email,
        key: creds.private_key,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    } catch (error) {
      console.error("[Auth] Error reading service-account.json:", error);
    }
  }

  // Priority 2: Individual Env Variables (Production / CI / Cloud)
  if (
    process.env.GOOGLE_SERVICE_EMAIL &&
    process.env.GOOGLE_SERVICE_PRIVATE_KEY
  ) {
    try {
      const clientEmail = process.env.GOOGLE_SERVICE_EMAIL;
      let privateKey = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

      // Handle escaped newlines (common issue in some environments)
      if (privateKey.includes("\\n")) {
        privateKey = privateKey.replace(/\\n/g, "\n");
      }

      console.log(
        "[Auth] Loaded credentials from GOOGLE_SERVICE_EMAIL / PRIVATE_KEY",
      );
      console.log("[Auth] Client Email:", clientEmail);
      console.log("[Auth] Private Key Length:", privateKey.length);

      return new JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    } catch (error) {
      console.error("[Auth] Error processing env vars:", error);
    }
  }

  console.error(
    "[Auth] No valid Google Sheets credentials found (File or Env).",
  );
  return null;
};

/**
 * Verify connection to Google Sheets
 */
export const checkSheetsConnection = async () => {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!spreadsheetId) {
    return { success: false, error: "GOOGLE_SPREADSHEET_ID missing" };
  }

  const auth = getAuth();
  if (!auth) {
    return { success: false, error: "Invalid Google credentials" };
  }

  try {
    const doc = new GoogleSpreadsheet(spreadsheetId, auth);
    await doc.loadInfo();

    console.log(`[Sheets] Connected to: ${doc.title}`);
    return { success: true, title: doc.title };
  } catch (err) {
    console.error("[Sheets] Connection failed:", err);
    return { success: false, error: err.message };
  }
};

/**
 * Append data to sheet
 */
export const appendToSheet = async (sheetKey, rowData) => {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) {
    return { success: false, error: "GOOGLE_SPREADSHEET_ID missing" };
  }

  const sheetEnv = `SHEET_${sheetKey}`;
  const sheetValue = process.env[sheetEnv];

  if (!sheetValue) {
    return { success: false, error: `${sheetEnv} missing` };
  }

  const sheetTitle = sheetValue.includes("!")
    ? sheetValue.split("!")[0]
    : sheetValue;

  const auth = getAuth();
  if (!auth) {
    return { success: false, error: "Invalid Google credentials" };
  }

  try {
    const doc = new GoogleSpreadsheet(spreadsheetId, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle[sheetTitle];
    if (!sheet) {
      return { success: false, error: `Sheet '${sheetTitle}' not found` };
    }

    await sheet.loadHeaderRow().catch(() => {});

    if (!sheet.headerValues?.length) {
      const headersMap = {
        CONTACT: ["DATE", "NAME", "EMAIL", "PHONE", "MESSAGE"],
        EVENT: [
          "DATE",
          "P NAME",
          "PHONE",
          "MAIL",
          "C NAME",
          "C DOB",
          "COLOR 1",
          "COLOR 2",
          "FLIP BRANCH",
          "GUESTS",
        ],
        SCHEDULE: [
          "DATE",
          "P NAME",
          "PHONE",
          "MAIL",
          "MEMBERSHIP",
          "C NAME",
          "C DOB",
          "C SCHOOL",
          "EM CONTACT NAME",
          "EC PHONE",
          "MESSAGE",
        ],
      };

      await sheet.setHeaderRow(headersMap[sheetKey] || []);
    }

    await sheet.addRow(rowData);
    console.log(`[Sheets] Row added to ${sheetTitle}`);
    return { success: true };
  } catch (err) {
    console.error("[Sheets] Append failed:", err);
    return { success: false, error: err.message };
  }
};
