import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: "onboarding@weareneonanthem.com",
  to: "siddhantkuchnure27@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
