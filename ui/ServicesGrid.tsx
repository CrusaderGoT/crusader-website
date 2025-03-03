"use client";

import {
    Container,
    Divider,
    Stack,
    Text,
    ThemeIcon,
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
        <Stack h="2000" mah={"20vh"} justify="space-evenly">
            {Array.from({ length: 3 }).map((_, index) => {
                const autoscroll = useRef(
                    AutoScroll({
                        startDelay: 1,
                        speed: 1,
                        stopOnInteraction: false,
                        stopOnFocusIn: false,
                        direction: index % 2 === 0 ? "forward" : "backward",
                    })
                );

                return (
                    <Carousel
                        height="100%"
                        align={"start"}
                        key={`${randomId()}`}
                        plugins={[autoscroll.current]}
                              loop
                        withControls={false}
                        slideGap={0}
                        
                        slideSize={`${(100 / (techs.length - 1)).toFixed(1)}%`}
                        style={{
                            flex: 1,
                            maskImage: `linear-gradient(
                                to right,
                                transparent,
                                #000 10% 90%,
                                transparent
                            )`,
                        }}
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

function ServicesTimeline() {}
