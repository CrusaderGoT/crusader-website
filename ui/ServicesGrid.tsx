"use client";

import {
    Container,
    Divider,
    Group,
    Stack,
    Text,
    ThemeIcon,
    Timeline,
    Title,
    type MantineColor,
    type MantineGradient,
    type MantineRadius,
    type MantineSize,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

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
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { randomId, useId } from "@mantine/hooks";

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
    const autoscroll = useRef(
        AutoScroll({
            startDelay: 1,
            speed: 3,
            stopOnInteraction: false,
            stopOnFocusIn: false,
        })
    );
    const autoplay = useRef(
        Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
        })
    );

    return (
        <Stack h={"20vh"}>
            {Array.from({ length: 3 }).map(() => (
                <Carousel
                    height="100%"
                    key={`${randomId()}`}
                    plugins={[autoplay.current, autoscroll.current]}
                    loop
                    withControls={false}
                    slideGap={`xs`}
                    slidesToScroll={"auto"}
                    style={{
                        flex: 1,
                        border: "1px solid",
                    }}
                >
                    {techs.map((tech) => {
                        const Icon = tech.icon;
                        tech.size = tech.size || "md";
                        tech.radius = tech.radius || "md";
                        tech.autoContrast = tech.autoContrast || true;
                        tech.variant = tech.variant || "light";

                        return (
                            <Carousel.Slide
                                key={`-${randomId()}`}
                                style={{
                                    border: "1px solid",
                                }}
                            >
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
            ))}
        </Stack>
    );
}

function ServicesTimeline() {}
