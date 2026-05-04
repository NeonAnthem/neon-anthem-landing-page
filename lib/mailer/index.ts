import nodemailer from "nodemailer";
import { resend } from "./resend";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  authMethod: "PLAIN",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMagicLinkEmail(email: string, url: string) {
  await resend.emails.send({
    from: "onboarding@weareneonanthem.com",
    to: email,
    subject: "Hello World",
    html: `<p>${url}</p>`,
  });

  return;

  await transporter.sendMail({
    from: `"Neon Anthem" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your magic link",
    text: `Click the link to sign in: ${url}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;">
        <h2 style="margin:0 0 8px;">Sign in to Neon Anthem</h2>
        <p style="color:#555;margin:0 0 24px;">Click the button below to sign in. This link expires in 5 minutes.</p>
        <a href="${url}" style="display:inline-block;background:#000;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:600;">Sign in</a>
        <p style="color:#999;font-size:12px;margin:24px 0 0;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });
}
