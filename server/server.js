import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
// Load environment variables immediately
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());

// Rate Limiting
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(globalLimiter);

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 form submissions per hour
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Transporter Configuration (Gmail Example)
// For Gmail, you need an App Password: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper to send mail
const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to, // Currently sending to self or configured admin email
      subject: subject,
      html: html,
    });
    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending mail:", error);
    return { success: false, error: error };
  }
};

// Helper to verify ReCAPTCHA
const verifyRecaptcha = async (token) => {
  if (!token) return false;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      },
    );
    const data = await response.json();

    if (data.success) {
      console.log("✅ ReCAPTCHA verification passed:", data);
    } else {
      console.warn("⚠️ ReCAPTCHA verification failed:", data);
    }

    return data.success;
  } catch (error) {
    console.error("❌ ReCAPTCHA verification error:", error);
    return false;
  }
};

import { appendToSheet, checkSheetsConnection } from "./sheets.js";

// Verify Sheets Connection on Startup
checkSheetsConnection().then((result) => {
  if (result.success) {
    console.log("✅ Google Sheets connected successfully");
  } else {
    console.warn("⚠️ Google Sheets connection failed:", result.error);
  }
});

// 1. Contact Form Endpoint
app.post("/api/contact", formLimiter, async (req, res) => {
  const { name, email, phone, message, captchaToken } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const isHuman = await verifyRecaptcha(captchaToken);
  if (!isHuman) {
    return res.status(400).json({ error: "ReCAPTCHA verification failed." });
  }

  const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">Contact Message</h2>
                <p style="margin: 5px 0 0;">New inquiry received</p>
            </div>
            
            <div style="padding: 20px;">
                <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">👤 Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 25px;">
                    <h3 style="color: #2c3e50; margin-top: 0; font-size: 16px;">💬 Message</h3>
                    ${message ? message.replace(/\n/g, "<br/>") : "No message content."}
                </div>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
                Sent from Flip Inverted Arts Website
            </div>
        </div>
    `;

  // Send emails in parallel (Same content to both)
  const [adminResult, userResult] = await Promise.all([
    sendMail(process.env.EMAIL_USER, `Contact Request from ${name}`, html),
    sendMail(email, `Contact Request Received - Flip Inverted Arts`, html),
  ]);

  // 2. Save to Google Sheet
  // Columns: ['Timestamp', 'Form Type', 'Name', 'Email', 'Phone', 'Message']
  const sheetResult = await appendToSheet("CONTACT", [
    new Date().toLocaleString("en-GB", { timeZone: "Africa/Cairo" }),
    name,
    email,
    `'${phone}`,
    message,
  ]);

  // Check email result primarily, but log sheet result
  if (adminResult.success) {
    res.json({
      message: "Contact email sent successfully",
      sheetSaved: sheetResult.success,
    });
  } else {
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 2. Event Registration Endpoint
app.post("/api/register-event", formLimiter, async (req, res) => {
  // Expecting full registration details
  const {
    parentName,
    parentEmail,
    parentPhone,
    childName,
    childDOB,
    favoriteColor1,
    favoriteColor2,
    flipBranch,
    guests,
    message,
    captchaToken,
  } = req.body;

  const isHuman = await verifyRecaptcha(captchaToken);
  if (!isHuman) {
    return res.status(400).json({ error: "ReCAPTCHA verification failed." });
  }

  const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">Event Registration</h2>
                <p style="margin: 5px 0 0;">New registration received</p>
            </div>
            
            <div style="padding: 20px;">
                <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">👨‍👩‍👧 Parent Information</h3>
                <p><strong>Name:</strong> ${parentName}</p>
                <p><strong>Email:</strong> ${parentEmail}</p>
                <p><strong>Phone:</strong> ${parentPhone}</p>
                
                <h3 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 5px; margin-top: 25px;">👶 Child Information</h3>
                <p><strong>Name:</strong> ${childName}</p>
                <p><strong>Date of Birth:</strong> ${childDOB}</p>
                <p><strong>Favorite Color 1:</strong> ${favoriteColor1}</p>
                <p><strong>Favorite Color 2:</strong> ${favoriteColor2 || "N/A"}</p>
                
                <h3 style="color: #2c3e50; border-bottom: 2px solid #f1c40f; padding-bottom: 5px; margin-top: 25px;">📝 Additional Details</h3>
                <p><strong>Preferred Branch:</strong> ${flipBranch}</p>
                <p><strong>Guests:</strong> ${guests || "None"}</p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    <strong>Message / Notes:</strong><br/>
                    ${message ? message.replace(/\n/g, "<br/>") : "No additional message."}
                </div>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
                Sent from Flip Inverted Arts Website
            </div>
        </div>
    `;

  // Send emails in parallel (Same content to both)
  const [adminResult, userResult] = await Promise.all([
    sendMail(process.env.EMAIL_USER, `Event Registration: ${childName}`, html),
    sendMail(
      parentEmail,
      `Event Registration Received - Flip Inverted Arts`,
      html,
    ),
  ]);

  // Columns: ['DATE', 'P NAME', 'PHONE', 'MAIL', 'C NAME', 'C DOB', 'COLOR 1', 'COLOR 2', 'FLIP BRANCH', 'GUESTS']
  const sheetResult = await appendToSheet("EVENT", [
    new Date().toLocaleString("en-GB", { timeZone: "Africa/Cairo" }),
    parentName,
    `'${parentPhone}`,
    parentEmail,
    childName,
    childDOB,
    favoriteColor1,
    favoriteColor2 || "",
    flipBranch,
    guests || "",
  ]);

  if (adminResult.success) {
    res.json({
      message: "Event registration email sent successfully",
      sheetSaved: sheetResult.success,
    });
  } else {
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 3. Schedule/Location Registration Endpoint
app.post("/api/register-schedule", formLimiter, async (req, res) => {
  const {
    locationName,
    parentName,
    parentEmail,
    parentPhone,
    geziraMembership,
    childName,
    childDOB,
    childSchool,
    emergencyName,
    emergencyPhone,
    message,
    captchaToken,
  } = req.body;

  const isHuman = await verifyRecaptcha(captchaToken);
  if (!isHuman) {
    return res.status(400).json({ error: "ReCAPTCHA verification failed." });
  }

  const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">Schedule Registration</h2>
                <h3 style="margin: 5px 0 0; color: #ecf0f1; font-weight: normal;">${locationName || "General Location"}</h3>
            </div>
            
            <div style="padding: 20px;">
                <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 5px;">👨‍👩‍👧 Parent Information</h3>
                <p><strong>Name:</strong> ${parentName}</p>
                <p><strong>Email:</strong> ${parentEmail}</p>
                <p><strong>Phone:</strong> ${parentPhone}</p>
                ${geziraMembership ? `<p><strong>Gezira Membership #:</strong> ${geziraMembership}</p>` : ""}
                
                <h3 style="color: #2c3e50; border-bottom: 2px solid #e74c3c; padding-bottom: 5px; margin-top: 25px;">👶 Child Information</h3>
                <p><strong>Name:</strong> ${childName}</p>
                <p><strong>Date of Birth:</strong> ${childDOB}</p>
                <p><strong>School:</strong> ${childSchool}</p>
                
                <h3 style="color: #2c3e50; border-bottom: 2px solid #e67e22; padding-bottom: 5px; margin-top: 25px;">🚨 Emergency Contact</h3>
                <p><strong>Name:</strong> ${emergencyName}</p>
                <p><strong>Phone:</strong> ${emergencyPhone}</p>

                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 25px;">
                    <strong>Message / Notes:</strong><br/>
                    ${message ? message.replace(/\n/g, "<br/>") : "No additional message."}
                </div>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #7f8c8d;">
                Sent from Flip Inverted Arts Website
            </div>
        </div>
    `;

  // Send emails in parallel (Same content to both)
  const [adminResult, userResult] = await Promise.all([
    sendMail(
      process.env.EMAIL_USER,
      `Schedule Registration [${locationName}]: ${childName}`,
      html,
    ),
    sendMail(
      parentEmail,
      `Class Registration Received - Flip Inverted Arts`,
      html,
    ),
  ]);

  // Columns: ['DATE', 'P NAME', 'PHONE', 'MAIL', 'MEMBERSHIP', 'C NAME', 'C DOB', 'C SCHOOL', 'EM CONTACT NAME', 'EC PHONE', 'MESSAGE']
  const sheetResult = await appendToSheet("SCHEDULE", [
    new Date().toLocaleString("en-GB", { timeZone: "Africa/Cairo" }),
    parentName,
    `'${parentPhone}`,
    parentEmail,
    geziraMembership || "",
    childName,
    childDOB,
    childSchool,
    emergencyName,
    `'${emergencyPhone}`,
    message || "",
  ]);

  if (adminResult.success) {
    res.json({
      message: "Schedule registration email sent successfully",
      sheetSaved: sheetResult.success,
    });
  } else {
    res.status(500).json({ error: "Failed to send email" });
  }
});

// For ESM (import.meta.url) equivalent of require.main === module
import { fileURLToPath } from "url";
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
