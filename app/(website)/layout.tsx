import { WebsiteShell } from "@/components/shell/WebsiteShell";

export default async function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <WebsiteShell>{children}</WebsiteShell>;
}
