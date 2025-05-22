// Language Page.
import { LanguageCarousel } from "@/components/ui/LanguageCarousel";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Language",
    description: "Languages I Write, Read, and Speak",
};

export default function LanguagePage() {
    return <LanguageCarousel />;
}
