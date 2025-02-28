"use client";

import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModeToggleButton } from "./ModeToggleButton";
import { useHeadroom } from "@mantine/hooks"

export function WebsiteShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);


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
                offset: false
            }}
        >
            <AppShell.Header zIndex={210}>
                <Group justify="space-between" p={5}>
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
                    <Title c={"gold"}>CrusaderGoT</Title>
                    <ModeToggleButton />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar></AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer>
                <p>footer</p>
            </AppShell.Footer>
        </AppShell>
    );
}
