import { Box } from "@mantine/core";

export default async function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box
            style={{
                "@keyframes appear": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                "@keyframes slide": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(0)" },
                },
                animation: "appear 300ms ease, slide 300ms ease",
            }}
        >
            {children}
        </Box>
    );
}
