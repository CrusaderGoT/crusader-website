"use client";

import { NavLink, Stack } from "@mantine/core";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/components/data/navlinkData";

type ShellNavLinksProps = {
    onNavLinkClick?: () => void;
};

export function ShellNavLinks({
    onNavLinkClick: closeNavbar,
}: ShellNavLinksProps) {
    const pathname = usePathname();
    const l = links.slice(0,4)

    return (
        <Stack justify="space-evenly">
            {l.map((link, index) => {
                const NavIcon = link.leftSection;

                return (
                    <NavLink
                        key={`${link.href}-${index}`}
                        component={Link}
                        href={link.href}
                        label={link.label}
                        description={link.description}
                        leftSection={<NavIcon size={20} stroke={1.5} />}
                        active={pathname === link.href}
                        autoContrast
                        onClick={closeNavbar}
                    />
                );
            })}
        </Stack>
    );
}
