// components/ModeToggleButton.tsx
"use client";

import classes from "@/styles/shell/ModeToggleButton.module.css";

import {
    ActionIcon,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";

import { IconMoon, IconSun } from "@tabler/icons-react";

import cx from "clsx";

export function ModeToggleButton() {
    const { setColorScheme } = useMantineColorScheme();
    // This hook returns a computed value that is always 'light' or 'dark'
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    // Toggle function: if current scheme is light, set to dark; otherwise, set to light
    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
    };

    return (
        <ActionIcon
            onClick={toggleColorScheme}
            variant="subtle"
            size="md"
            aria-label="Toggle color scheme"
        >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
    );
}
