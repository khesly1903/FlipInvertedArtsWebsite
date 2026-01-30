const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Configuration (Gmail Example)
// For Gmail, you need an App Password: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Helper to send mail
const sendMail = async (to, subject, html) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: to, // Currently sending to self or configured admin email
            subject: subject,
            html: html
        });
        console.log('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending mail:", error);
        return { success: false, error: error };
    }
};

// 1. Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const html = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // Send to admin (using same email for now, or add EMAIL_ADMIN to .env)
    const result = await sendMail(process.env.EMAIL_USER, `Contact Request from ${name}`, html);

    if (result.success) {
        res.json({ message: "Contact email sent successfully" });
    } else {
        res.status(500).json({ error: "Failed to send email" });
    }
});

// 2. Event Registration Endpoint
app.post('/api/register-event', async (req, res) => {
    // Expecting full registration details
    const { 
        parentName, parentEmail, parentPhone, 
        childName, childDOB, 
        message 
        // Add other fields as needed
    } = req.body;

    const html = `
        <h2>New Event Registration</h2>
        <p><strong>Parent:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${parentEmail}</p>
        <p><strong>Phone:</strong> ${parentPhone}</p>
        <hr/>
        <p><strong>Child:</strong> ${childName}</p>
        <p><strong>DOB:</strong> ${childDOB}</p>
        <hr/>
        <p><strong>Message/Notes:</strong> ${message || 'N/A'}</p>
    `;

    const result = await sendMail(process.env.EMAIL_USER, `Event Registration: ${childName}`, html);

    if (result.success) {
        res.json({ message: "Event registration email sent successfully" });
    } else {
        res.status(500).json({ error: "Failed to send email" });
    }
});

// 3. Schedule/Location Registration Endpoint
app.post('/api/register-schedule', async (req, res) => {
    const { 
        locationName, 
        parentName, parentEmail, parentPhone,
        childName, childDOB,
        message
    } = req.body;

    if (!locationName) {
         return res.status(400).json({ error: "Location name is required" });
    }

    const html = `
        <h2>New Schedule Registration</h2>
        <h3 style="color: #2c3e50;">Location: ${locationName}</h3>
        <p><strong>Parent:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${parentEmail}</p>
        <p><strong>Phone:</strong> ${parentPhone}</p>
        <hr/>
        <p><strong>Child:</strong> ${childName}</p>
        <p><strong>DOB:</strong> ${childDOB}</p>
        <hr/>
        <p><strong>Message/Notes:</strong> ${message || 'N/A'}</p>
    `;

    const result = await sendMail(process.env.EMAIL_USER, `Schedule Registration [${locationName}]: ${childName}`, html);

    if (result.success) {
        res.json({ message: "Schedule registration email sent successfully" });
    } else {
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
