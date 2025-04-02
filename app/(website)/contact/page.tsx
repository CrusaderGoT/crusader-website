import { ContactForm } from "@/components/ui/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "Write me an email about your project",
};


export default function ContactPage() {
    return <ContactForm />;
}
