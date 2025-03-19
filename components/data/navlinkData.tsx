import {
    type Icon,
    IconBrandGithub,
    IconBriefcase,
    IconContract,
    IconHome,
    IconUserCode,
} from "@tabler/icons-react";

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

export { links };
