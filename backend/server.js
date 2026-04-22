require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/contact", async (req, res) => {
  console.log("API HIT");

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Transporter (stable config)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log("Sending email...");

    await transporter.sendMail({
      from: `"Vyoobam Website" <${process.env.EMAIL_USER}>`,
      to: "gowrivijayan2013@gmail.com", // test first
      replyTo: email, // VERY IMPORTANT
      subject: `New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
  `,
    });

    console.log("EMAIL SENT");

    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
