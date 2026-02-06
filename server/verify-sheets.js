import dotenv from 'dotenv';
import { checkSheetsConnection } from './sheets.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the same directory
dotenv.config({ path: path.join(__dirname, '.env') });

console.log("Running Sheets Connection Verification...");

async function run() {
    const result = await checkSheetsConnection();
    if (result.success) {
        console.log("✅ VERIFICATION SUCCESS: Connected to Sheet:", result.title);
    } else {
        console.error("❌ VERIFICATION FAILED:", result.error);
        process.exit(1);
    }
}

run();
