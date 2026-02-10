import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { checkSheetsConnection } from "./sheets.js";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const verifySheets = async () => {
  console.log("🔍 Verifying Google Sheets connection...");

  // Check for service-account.json first (Priority 1)
  const serviceAccountPath = path.join(__dirname, "service-account.json");

  if (fs.existsSync(serviceAccountPath)) {
    console.log(
      "📂 Found 'service-account.json'. Authentication will use this file.",
    );
  } else {
    console.log(
      "⚠️ 'service-account.json' not found. Checking environment variables...",
    );

    // Debug output for environment variables (masked for security)
    if (process.env.GOOGLE_SERVICE_EMAIL) {
      console.log(
        `[Env] GOOGLE_SERVICE_EMAIL: ${process.env.GOOGLE_SERVICE_EMAIL}`,
      );
    } else {
      console.warn("[Env] GOOGLE_SERVICE_EMAIL is missing/empty");
    }

    if (process.env.GOOGLE_SERVICE_PRIVATE_KEY) {
      const key = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
      console.log(
        `[Env] GOOGLE_SERVICE_PRIVATE_KEY found (Length: ${key.length})`,
      );
      console.log(`[Env] Key Start: ${JSON.stringify(key.substring(0, 50))}`);
      // Check for literal \n
      if (key.includes("\\n")) {
        console.log(
          "[Env] Key contains literal '\\n' characters (will be replaced)",
        );
      } else {
        console.log("[Env] Key does NOT contain literal '\\n'");
      }
    } else {
      console.warn("[Env] GOOGLE_SERVICE_PRIVATE_KEY is missing/empty");
    }
  }

  const result = await checkSheetsConnection();

  if (result.success) {
    console.log("✅ SUCCESS: Connected to Google Sheets.");
    console.log("📄 Sheet Title:", result.title);
    process.exit(0);
  } else {
    console.error("❌ FAILED: Could not connect to Google Sheets.");
    console.error("Reason:", result.error);
    process.exit(1);
  }
};

verifySheets().catch((err) => {
  console.error("\n❌ UNEXPECTED ERROR:");
  console.error(err);
  process.exit(1);
});
