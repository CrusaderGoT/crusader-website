"use client";

import { Button, ButtonProps } from "@mantine/core";

import { useRouter } from "next/navigation";

export type RefeshButtonProp = {
    displayName: string;
} & ButtonProps;

export function RefreshButton({ displayName, ...props }: RefeshButtonProp) {
    const router = useRouter();
    return (
        <Button {...props} onClick={() => router.refresh()}>
            {displayName}
        </Button>
    );
}
