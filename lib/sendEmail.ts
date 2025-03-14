"use server";
import { contactFormType } from "@/zod-schemas/contactSchema";

import { Resend } from "resend";

import ContactEmailTemplate from "@/components/email/contact-email-template";

export async function sendEmail(formData: contactFormType) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailResponse = await resend.emails.send({
        from: 'CrusaderGoT <onboarding@resend.dev>',
        to: ["enememeka44@gmail.com"],
        replyTo: formData.email,
        subject: formData.subject,
        react: await ContactEmailTemplate(formData),
    });

    return emailResponse;
}
