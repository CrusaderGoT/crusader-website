import {
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandDjango,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMantine,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript,
    type Icon,
} from "@tabler/icons-react";

import {
    type MantineColor,
    type MantineGradient,
    type MantineRadius,
    type MantineSize,
} from "@mantine/core";

import {
    IconCheck,
    IconCircle,
    IconCode,
    IconLayersUnion,
    IconServer,
} from "@tabler/icons-react";

// Types and data for services timeline
type ServiceItemProps = {
    title: string;
    bulletIcon?: React.ReactNode;
    priceStart: number;
    list: ServiceItemListProps;
};

type ListItemProps = {
    item: string;
    specIcon?: React.ReactNode;
};

type ServiceItemListProps = {
    genIcon?: React.ReactNode;
    items: ListItemProps[];
};

/**
 * An array of service item objects that detail various development and automation services.
 *
 * @remarks
 * Each service item object includes:
 * - title: The service name.
 * - bulletIcon: A React component representing the service icon.
 * - priceStart: The starting price in NGN for the service.
 * - list: An object that provides additional details containing:
 *   - icon: A React component used as a check icon for list items.
 *   - items: An array of objects, each describing a feature of the service. Each feature includes:
 *     - item: A string description of the feature.
 *     - icon: A React component representing the list item bullet.
 *
 * @example
 * // Access the title of the first service item
 * const firstServiceTitle = serviceItems[0].title;
 *
 * @public
 */
export const serviceItems: ServiceItemProps[] = [
    {
        title: "FULL-STACK DEVELOPMENT",
        bulletIcon: <IconLayersUnion size={24} />,
        priceStart: 150000, // Starting project price in NGN
        list: {
            genIcon: <IconCheck size={16} />,
            items: [
                {
                    item: "I will design and develop complete web applications by integrating robust back-end APIs (using Django or FastAPI) with dynamic front-end frameworks (Next.js and React) for a seamless, responsive experience.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will implement server-side rendering and static site generation with TailwindCSS to optimize performance and SEO.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will integrate secure authentication systems (JWT/OAuth2) and essential third-party API services to enhance functionality.",
                    specIcon: <IconCircle size={12} />,
                },
            ],
        },
    },
    {
        title: "Backend Development",
        bulletIcon: <IconServer size={24} />,
        priceStart: 100000, // Starting project price in NGN
        list: {
            genIcon: <IconCheck size={16} />,
            items: [
                {
                    item: "I will develop scalable RESTful APIs using Django REST Framework or FastAPI tailored to your project needs.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will design and manage robust relational databases using SQLAlchemy, SQLModel, or Drizzle ORM to ensure data integrity.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will integrate third-party services including payment gateways and social authentication systems to expand functionality.",
                    specIcon: <IconCircle size={12} />,
                },
            ],
        },
    },
    {
        title: "Automation & Scripting",
        bulletIcon: <IconCode size={24} />,
        priceStart: 75000, // Starting project price in NGN
        list: {
            genIcon: <IconCheck size={16} />,
            items: [
                {
                    item: "I will automate repetitive tasks using Python, including data scraping, file processing, and API integrations to streamline operations.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will build custom data validation pipelines with TypeScript and Zod for reliable schema enforcement.",
                    specIcon: <IconCircle size={12} />,
                },
                {
                    item: "I will develop tailored scripts to optimize workflows and enhance overall system efficiency.",
                    specIcon: <IconCircle size={12} />,
                },
            ],
        },
    },
];

// Types and data for tech slides
type TechProp = {
    icon: Icon;
    variant?: string;
    color?: MantineColor;
    gradient?: MantineGradient;
    size?: MantineSize | number;
    radius?: MantineRadius;
    autoContrast?: boolean;
};

export const techs: TechProp[] = [
    {
        icon: IconBrandDjango,
        variant: "filled",
        color: "green",
    },
    {
        icon: IconBrandPython,
        variant: "gradient",
        gradient: {
            from: "blue",
            to: "yellow",
            deg: 45,
        },
    },
    {
        icon: IconBrandTypescript,
        color: "blue",
    },
    {
        icon: IconBrandReact,
        color: "blue",
    },
    {
        icon: IconBrandMantine,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandNextjs,
        color: "white",
    },
    {
        icon: IconBrandJavascript,
        variant: "filled",
        color: "yellow",
    },
    {
        icon: IconBrandHtml5,
        variant: "filled",
        color: "orange",
    },
    {
        icon: IconBrandCss3,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandTailwind,
        variant: "subtle",
        color: "blue",
    },
    {
        icon: IconBrandBootstrap,
        variant: "outline",
        color: "blue",
    },
];
