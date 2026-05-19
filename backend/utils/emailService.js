import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Only set up transporter if email credentials are provided
const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASS &&
  process.env.EMAIL_USER !== 'your_email@gmail.com';

let transporter = null;

if (hasEmailConfig) {
  transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.warn('Email SMTP config warning:', error.message);
    } else {
      console.log('SMTP server is ready to send emails.');
    }
  });
} else {
  console.warn('Email credentials not configured — email notifications disabled.');
}

export const sendEmail = async (to, subject, html) => {
  if (!transporter) {
    console.log(`[Email skipped] To: ${to} | Subject: ${subject}`);
    return;
  }
  try {
    const info = await transporter.sendMail({
      from: `"AdTravelz" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error.message);
    // Don't rethrow — email failure should not block registration/login
  }
};
