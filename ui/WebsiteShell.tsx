"use client";

import { AppShell, Burger, Group, ScrollArea, Title } from "@mantine/core";

import { useDisclosure, useElementSize, useHeadroom } from "@mantine/hooks";

import { ModeToggleButton } from "@/ui/ModeToggleButton";
import { NavCard } from "@/ui/NavCard";
import { ShellNavLinks } from "@/ui/ShellNavLinks";

export function WebsiteShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const { ref, height } = useElementSize();
    const pinned = useHeadroom({ fixedAt: -(height) });

    return (
        <AppShell
            padding={"sm"}
            transitionDuration={500}
            transitionTimingFunction="ease-in-out"
            header={{
                height: { base: 50, sm: 60, lg: 72 },
            }}
            navbar={{
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                width: { base: 150, sm: 200, lg: 300 },
                breakpoint: "xs",
            }}
            footer={{
                height: 40,
                collapsed: pinned,
            }}
        >
            <AppShell.Header zIndex={210}>
                <Group justify="space-between" p={5} gap={"lg"}>
                    <Burger
                        opened={mobileOpened}
                        onClick={toggleMobile}
                        hiddenFrom="xs"
                        size="xs"
                    />
                    <Burger
                        opened={desktopOpened}
                        onClick={toggleDesktop}
                        visibleFrom="xs"
                        size="sm"
                    />
                    <Title c={"gold"} textWrap="nowrap">
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
                    <ShellNavLinks />
                </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main ref={ref}>{children}</AppShell.Main>

            <AppShell.Footer>
                <p>footer</p>
            </AppShell.Footer>
        </AppShell>
    );
}
