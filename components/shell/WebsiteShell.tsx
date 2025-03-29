"use client";

import { AppShell, Container, ScrollArea } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { ShellFooter } from "@/components/shell/ShellFooter";
import { NavCard } from "@/components/shell/ShellNavCard";
import { ShellNavLinks } from "@/components/shell/ShellNavLinks";
import { ShellHeader } from "./ShellHeader";

export function WebsiteShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction="ease-in-out"
            header={{
                height: 80,
            }}
            navbar={{
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                width: { base: 150, sm: 200, md: 250, lg: 300, xl: 350 },
                breakpoint: "xs",
            }}
        >
            <AppShell.Header zIndex={210}>
                <ShellHeader
                    toggleDesktop={toggleDesktop}
                    desktopOpened={desktopOpened}
                    toggleMobile={toggleMobile}
                    mobileOpened={mobileOpened}
                />
            </AppShell.Header>

            <AppShell.Navbar>
                <AppShell.Section>
                    <NavCard />
                </AppShell.Section>

                <AppShell.Section grow component={ScrollArea} mih={100}>
                    <ShellNavLinks onNavLinkClick={toggleMobile} />
                </AppShell.Section>

                <AppShell.Section
                    style={{
                        borderTop: "0.5px solid grey",
                    }}
                >
                    <footer>
                        <ShellFooter />
                    </footer>
                </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main>
                <Container size={"xl"}>{children}</Container>
            </AppShell.Main>
        </AppShell>
    );
}
