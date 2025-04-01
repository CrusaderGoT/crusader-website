import { PageTransition } from "@/components/shell/PageTransition";

export default async function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return <PageTransition>{children}</PageTransition>;
}
