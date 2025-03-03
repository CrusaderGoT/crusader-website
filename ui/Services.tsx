"use client";

import {
    Container,
    Divider,
    List,
    NumberFormatter,
    ScrollArea,
    Stack,
    Text,
    ThemeIcon,
    Timeline,
    type MantineColor,
    type MantineGradient,
    type MantineRadius,
    type MantineSize,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import { randomId } from "@mantine/hooks";
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
    IconTool,
    type Icon,
} from "@tabler/icons-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

export function Services() {
    return (
        <Container size={"xl"}>
            <Stack>
                <TechSlides />
                <Divider
                    label={
                        <>
                            <IconTool size={17} color="gold" />
                            <Text ml={5} fz={17} c={"gold"}>
                                Services
                            </Text>
                        </>
                    }
                    size={"md"}
                />
                <ServicesTimeline />
            </Stack>
        </Container>
    );
}

type TechProp = {
    icon: Icon;
    variant?: string;
    color?: MantineColor;
    gradient?: MantineGradient;
    size?: MantineSize | number;
    radius?: MantineRadius;
    autoContrast?: boolean;
};

const techs: TechProp[] = [
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

function TechSlides() {
    return (
        <Stack
            h="2000"
            mah={"30vh"}
            justify="space-evenly"
            style={{
                overflow: "hidden",
            }}
        >
            {Array.from({ length: 3 }).map((_, index) => {
                const autoscroll = useRef(
                    AutoScroll({
                        startDelay: 1,
                        speed: 3,
                        stopOnInteraction: false,
                        stopOnFocusIn: false,
                        direction: index % 2 === 0 ? "forward" : "backward",
                    })
                );

                return (
                    <Carousel
                        align={"start"}
                        key={`${randomId()}`}
                        plugins={[autoscroll.current]}
                        loop
                        withControls={false}
                        slideGap={`${(100 / (techs.length - 1)).toFixed(0)}%`}
                        slideSize={`${(100 / (techs.length - 1)).toFixed(1)}%`}
                        style={{
                            maskImage: `linear-gradient(
                                to right,
                                transparent,
                                #000 10% 90%,
                                transparent
                            )`,
flex: "1"
                        }}
height="100%"
                    >
                        {techs.map((tech) => {
                            const Icon = tech.icon;
                            tech.size = tech.size || "md";
                            tech.radius = tech.radius || "md";
                            tech.autoContrast = tech.autoContrast || true;
                            tech.variant = tech.variant || "light";

                            return (
                                <Carousel.Slide key={`-${randomId()}`}>
                                    <ThemeIcon
                                        key={`${randomId()}`}
                                        variant={tech.variant}
                                        color={tech.color}
                                        gradient={tech.gradient}
                                        size={tech.size}
                                        radius={tech.radius}
                                        autoContrast={tech.autoContrast}
                                    >
                                        <Icon />
                                    </ThemeIcon>
                                </Carousel.Slide>
                            );
                        })}
                    </Carousel>
                );
            })}
        </Stack>
    );
}

type ServiceItemProps = {
    title: string;
    bulletIcon?: React.ReactNode;
    priceStart: number;
    list: ServiceItemListProps;
};

type ServiceItemListProps = {
    icon?: React.ReactNode;
    items: ListItemProps[];
};

type ListItemProps = {
    item: string;
    icon?: React.ReactNode;
};

const mockServiceData: ServiceItemProps[] = [
    {
        title: "Web Development",
        bulletIcon: <IconBrandReact size={12} />,
        priceStart: 500,
        list: {
            icon: <IconTool />,
            items: [
                { item: "Responsive design", icon: <IconBrandHtml5 /> },
                { item: "SEO optimization", icon: <IconBrandBootstrap /> },
                { item: "Performance tuning", icon: <IconBrandPython /> },
            ],
        },
    },
    {
        title: "Mobile Development",
        bulletIcon: <IconBrandTypescript size={12} />,
        priceStart: 700,
        list: {
            icon: <IconTool />,
            items: [
                {
                    item: "Cross-platform development",
                    icon: <IconBrandReact />,
                },
                { item: "Native performance", icon: <IconBrandNextjs /> },
            ],
        },
    },
    {
        title: "UI/UX Design",
        bulletIcon: <IconBrandMantine size={12} />,
        priceStart: 400,
        list: {
            icon: <IconTool />,
            items: [
                { item: "User research", icon: <IconTool /> },
                { item: "Wireframing", icon: <IconTool /> },
                { item: "Prototyping", icon: <IconTool /> },
            ],
        },
    },
];

function ServicesTimeline() {
    return (
        <ScrollArea.Autosize
            mah={"60vh"}
            offsetScrollbars
            overscrollBehavior="contain"
            scrollHideDelay={500}
        >
            <Timeline
                active={mockServiceData.length}
                bulletSize={24}
                lineWidth={2}
                color="gold"
            >
                {mockServiceData.map((service) => {
                    return (
                        <Timeline.Item
                            key={service.title}
                            bullet={service.bulletIcon}
                            title={service.title}
                            lineVariant="dashed"
                        >
                            <List icon={service.list.icon}>
                                {service.list.items.map((item) => {
                                    return (
                                        <List.Item
                                            key={item.item}
                                            icon={item.icon}
                                        >
                                            <Text>{item.item}</Text>
                                        </List.Item>
                                    );
                                })}
                            </List>
                            {service.priceStart && (
                                <Text>
                                    This service is availabe start from price{" "}
                                    <NumberFormatter
                                        prefix="$"
                                        value={service.priceStart}
                                        suffix="USD"
                                        thousandSeparator
                                        decimalScale={2}
                                    />
                                </Text>
                            )}
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </ScrollArea.Autosize>
    );
}
