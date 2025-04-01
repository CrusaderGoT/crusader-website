"use client";

import { Box, Transition } from "@mantine/core";
import { useMounted } from "@mantine/hooks";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const mounted = useMounted();

    return (
        <Transition
            mounted={mounted}
            keepMounted
            transition="slide-right"
            timingFunction="ease"
            duration={1000}
        >
            {(transitionStyles) => (
                <Box style={{ ...transitionStyles }}>{children}</Box>
            )}
        </Transition>
    );
}
