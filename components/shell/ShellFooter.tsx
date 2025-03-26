"use client";

import {
    ActionIcon,
    Group,
    Highlight,
    Stack,
    Text,
    type MantineColor,
} from "@mantine/core";

import {
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    IconBrandTelegram,
    IconBrandTwitterFilled,
    IconCopyright,
    type Icon,
} from "@tabler/icons-react";

import dayjs from "dayjs";

type FooterSocialProp = {
    name: string;
    icon: Icon;
    color: MantineColor;
    href: string;
};

const footerSocialData: FooterSocialProp[] = [
    {
        name: "Github",
        icon: IconBrandGithubFilled,
        color: "dark",
        href: "https://github.com/CrusaderGoT",
    },
    {
        name: "LinkedIn",
        icon: IconBrandLinkedinFilled,
        color: "cyan",
        href: "https://www.linkedin.com/in/chukwuemeka-enemchukwu/",
    },
    {
        name: "Twitter/X",
        icon: IconBrandTwitterFilled,
        color: "teal",
        href: "https://twitter.com/Achebestan",
    },
    {
        name: "Telegram",
        icon: IconBrandTelegram,
        color: "blue",
        href: "https://t.me/CrusaderGoT",
    },
];

export function ShellFooter() {
    const year = dayjs().year();

    return (
        <Stack gap={5} px={"xs"} pt={5}>
            <Highlight
                ta={"center"}
                size="xs"
                highlight={["CrusaderGoT"]}
                highlightStyles={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                }}
            >
                Made with 💛 by CrusaderGoT
            </Highlight>
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
                                variant="filled"
                                autoContrast
                                component="a"
                                aria-label={social.name}
                                size={20}
                                radius={"lg"}
                                color={social.color}
                                href={social.href}
                                target="_blank"
                            >
                                <Icon size={14} />
                            </ActionIcon>
                        </Group>
                    );
                })}
            </Group>
            <Text size="xs" ta={"center"}>
                <IconCopyright size={12} /> {year} All rigth reserve and all
                that...
            </Text>
        </Stack>
    );
}
