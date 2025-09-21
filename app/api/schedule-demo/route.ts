// File: app/api/schedule-demo/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DemoScheduleRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  serviceInterest: string;
  projectDetails: string;
  preferredDemoTime: string;
}

export async function POST(request: Request) {
  try {
    const body: DemoScheduleRequest = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phoneNumber, 
      jobTitle, 
      serviceInterest, 
      projectDetails, 
      preferredDemoTime 
    } = body;

    // Basic validation
    if (!firstName || !email || !projectDetails) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Configure Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // 1. Email to the user (Acknowledgement)
    const userMailOptions = {
      from: `"Your Company Name" <${process.env.EMAIL_SENDER}>`,
      to: email,
      subject: "✅ Demo Request Received!",
      html: `
        <h1>Hi ${firstName},</h1>
        <p>Thank you for scheduling a demo with us. We've received your request and will get back to you shortly.</p>
        <p><strong>Here are the details you provided:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Service Interest:</strong> ${serviceInterest}</li>
          <li><strong>Preferred Time:</strong> ${new Date(preferredDemoTime).toLocaleString()}</li>
        </ul>
        <p>Best regards,<br/>The Team</p>
      `,
    };

    // 2. Email to the website owner (Notification)
    const ownerMailOptions = {
      from: `"Website Form" <${process.env.EMAIL_SENDER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `🚀 New Demo Request from ${firstName} ${lastName}`,
      html: `
        <h1>New Demo Schedule Request</h1>
        <p>You have received a new demo request with the following details:</p>
        <ul>
          <li><strong>First Name:</strong> ${firstName}</li>
          <li><strong>Last Name:</strong> ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
          <li><strong>Job Title:</strong> ${jobTitle}</li>
          <li><strong>Service Interest:</strong> ${serviceInterest}</li>
          <li><strong>Preferred Demo Time:</strong> ${new Date(preferredDemoTime).toLocaleString()}</li>
          <li><strong>Project Details:</strong><br/><p>${projectDetails}</p></li>
        </ul>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
        transporter.sendMail(userMailOptions),
        transporter.sendMail(ownerMailOptions)
    ]);

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}