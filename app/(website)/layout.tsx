import { WebsiteShell } from "@/components/ui/shell/WebsiteShell"

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