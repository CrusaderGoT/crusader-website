"use client";

import { NavLink, Stack } from "@mantine/core";

import {
    type Icon,
    IconBrandGithub,
    IconBriefcase,
    IconContract,
    IconHome,
    IconUserCode,
} from "@tabler/icons-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    label: string;
    leftSection: Icon;
    description?: string;
};

const links: NavLinkProps[] = [
    {
        href: "/",
        label: "Home",
        leftSection: IconHome,
    },
    {
        href: "/services",
        label: "Services",
        leftSection: IconBriefcase,
        description: "The services I offer",
    },
    {
        href: "/about",
        label: "About",
        leftSection: IconUserCode,
        description: "Let me to introduce myself",
    },
    {
        href: "/contact",
        label: "Contact",
        leftSection: IconContract,
        description: "Get in touch with me",
    },
    {
        href: "/projects",
        label: "Projects",
        leftSection: IconBrandGithub,
        description: "My GitHub projects",
    },
];

export function ShellNavLinks() {
    const pathname = usePathname();

    return (
        <Stack justify="space-evenly">
            {links.map((link, index) => {
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
                    />
                );
            })}
        </Stack>
    );
}
