// components/ModeToggleButton.tsx
"use client";

import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

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
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
        >
            {computedColorScheme === "light" ? (
                <IconSun stroke={1.5} />
            ) : (
                <IconMoon stroke={1.5} />
            )}
        </ActionIcon>
    );
}
