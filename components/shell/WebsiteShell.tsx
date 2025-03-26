"use client";

import {
    AppShell,
    Burger,
    Container,
    Group,
    ScrollArea,
    Title,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { ModeToggleButton } from "@/components/buttons/ModeToggleButton";
import { NavCard } from "@/components/shell/ShellNavCard";
import { ShellNavLinks } from "@/components/shell/ShellNavLinks";
import { ShellFooter } from "./ShellFooter";

export function WebsiteShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            padding={"xs"}
            transitionDuration={500}
            transitionTimingFunction="ease-in-out"
            header={{
                height: { base: 50, sm: 60, lg: 72 },
            }}
            navbar={{
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                width: { base: 150, sm: 200, md: 250, lg: 300, xl: 350 },
                breakpoint: "xs",
            }}
        >
            <AppShell.Header zIndex={210}>
                <Group justify="space-between" p={5} gap={"lg"}>
                    <Burger
                        opened={mobileOpened}
                        onClick={toggleMobile}
                        hiddenFrom="xs"
                        size="sm"
                    />
                    <Burger
                        opened={desktopOpened}
                        onClick={toggleDesktop}
                        visibleFrom="xs"
                        size="md"
                    />
                    <Title c={"gold"} fw={900} textWrap="nowrap">
                        CrusaderGoT
                    </Title>
                    <ModeToggleButton />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar>
                <AppShell.Section>
                    <NavCard />
                </AppShell.Section>

                <AppShell.Section grow component={ScrollArea}>
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
