"use client";

import {
    AppShell,
    Burger,
    Container,
    Group,
    ScrollArea,
    Title,
} from "@mantine/core";

import { useDisclosure, useElementSize, useHeadroom } from "@mantine/hooks";

import { ModeToggleButton } from "@/components/shell/ModeToggleButton";
import { NavCard } from "@/components/shell/NavCard";
import { ShellNavLinks } from "@/components/shell/ShellNavLinks";

export function WebsiteShell({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const { ref: mainRef, height: mainHeight } = useElementSize();

    const { ref: footerRef, height: footerHeight } = useElementSize();

    const pinned = useHeadroom({ fixedAt: -(mainHeight + footerHeight) });

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
            </AppShell.Navbar>

            <AppShell.Main ref={mainRef}>
                <Container size={"xl"} m={"xs"}>
                    {children}
                </Container>
            </AppShell.Main>

            {/**<AppShell.Footer ref={footerRef}>
                <p>footer</p>
            </AppShell.Footer>*/}
        </AppShell>
    );
}
