import { ActionIcon, Burger, Group, Stack, Title } from "@mantine/core";
import { ModeToggleButton } from "../buttons/ModeToggleButton";
import { footerSocialData } from "../data/socialLinksData";

type ShellHeaderProps = {
    mobileOpened: boolean;
    toggleMobile: () => void;
    desktopOpened: boolean;
    toggleDesktop: () => void;
};

export function ShellHeader({
    mobileOpened,
    toggleDesktop,
    desktopOpened,
    toggleMobile,
}: ShellHeaderProps) {
    return (
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
            <Stack justify="flex-start" gap={0}>
                <Title c={"gold.9"} fw={900} textWrap="nowrap">
                    CrusaderGoT
                </Title>
                <Group justify="space-between" gap={"xs"} wrap="nowrap">
                    {footerSocialData.map((social) => {
                        const Icon = social.icon;
                        return (
                            <Group
                                justify="start"
                                gap={5}
                                key={social.color + social.name}
                            >
                                <ActionIcon
                                    key={social.href}
                                    variant="light"
                                    autoContrast
                                    component="a"
                                    aria-label={social.name}
                                    size={24}
                                    radius={"lg"}
                                    color={social.color}
                                    href={social.href}
                                    target="_blank"
                                >
                                    <Icon size={17} />
                                </ActionIcon>
                            </Group>
                        );
                    })}
                </Group>
            </Stack>

            <ModeToggleButton />
        </Group>
    );
}
