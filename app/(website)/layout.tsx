import { WebsiteShell } from "@/components/shell/WebsiteShell";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "CrusaderGoT | %s",
        default: "Portfolio",
    },
    description: "My portfolio website",
};

export default async function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <WebsiteShell>{children}</WebsiteShell>;
}
