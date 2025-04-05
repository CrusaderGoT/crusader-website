"use client";

import { Highlight, Stack, Text } from "@mantine/core";

import { IconCopyright } from "@tabler/icons-react";

import dayjs from "dayjs";

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

            <Text size="xs" ta={"center"}>
                <IconCopyright size={12} /> {year} All rights reserved and all
                that...
            </Text>
        </Stack>
    );
}
