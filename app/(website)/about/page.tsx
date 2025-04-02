import { About } from "@/components/ui/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "A little story about myself",
};

export default function AboutPage() {
    return <About />;
}
