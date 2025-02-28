import { WebsiteShell } from "@/ui/WebsiteShell"

export default async function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <WebsiteShell>
            {children}
        </WebsiteShell>
        
    )
}