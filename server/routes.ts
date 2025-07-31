import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      // Nodemailer setup
      const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like 'Outlook', or configure for SMTP
        auth: {
          user: process.env.EMAIL_USER, // Your email address from environment variables
          pass: process.env.EMAIL_PASS // Your email password or app-specific password
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: process.env.EMAIL_USER, // Your personal email to receive messages
        subject: `New Contact Form Submission: ${validatedData.subject}`,
        html: `
          <p>You have a new contact form submission from your portfolio website.</p>
          <h3>Contact Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${validatedData.name}</li>
            <li><strong>Email:</strong> ${validatedData.email}</li>
            <li><strong>Subject:</strong> ${validatedData.subject}</li>
          </ul>
          <h3>Message:</h3>
          <p>${validatedData.message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
