import { Services } from "@/components/ui/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "These are services I specialize in, though not limited to them.",
};


export default function ServicesPage() {
    return <Services />;
}