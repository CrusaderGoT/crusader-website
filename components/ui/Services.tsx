"use client";

import {
    Divider,
    List,
    NumberFormatter,
    ScrollArea,
    Stack,
    Text,
    ThemeIcon,
    Timeline,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";

import { randomId } from "@mantine/hooks";

import AutoScroll from "embla-carousel-auto-scroll";

import { useRef } from "react";

import { serviceItems, techs } from "@/components/data/servicesData";
import { IconTool } from "@tabler/icons-react";

export function Services() {
    return (
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
    );
}

function TechSlides() {
    const noOfCarousel = 3;
    return (
        <Stack
            mah={"25vh"}
            justify="space-evenly"
            style={{
                overflow: "hidden",
            }}
        >
            {Array.from({ length: noOfCarousel }).map((_, index) => {
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

function ServicesTimeline() {
    return (
        <ScrollArea
            h={"55vh"}
            mah={"60vh"}
            offsetScrollbars
        >
            <Timeline
                active={serviceItems.length}
                bulletSize={24}
                lineWidth={2}
                color="gold"
            >
                {serviceItems.map((service) => {
                    return (
                        <Timeline.Item
                            key={service.title}
                            bullet={service.timelineBulletIcon}
                            title={service.title}
                            lineVariant="dashed"
                            fz={"h3"}
                        >
                            <List
                                icon={service.list.listDefaultIcon}
                                spacing={"xs"}
                                withPadding
                                size="lg"
                            >
                                {service.list.items.map((item) => {
                                    return (
                                        <List.Item
                                            key={item.item}
                                            icon={item.listContextIcon}
                                        >
                                            <Text>{item.item}</Text>
                                        </List.Item>
                                    );
                                })}
                            </List>
                            {service.priceStart && (
                                <Text fz={"xs"} c={"red"}>
                                    Availabe from price{" "}
                                    <NumberFormatter
                                        prefix="₦"
                                        value={service.priceStart}
                                        suffix="NGN"
                                        thousandSeparator
                                    />
                                </Text>
                            )}
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </ScrollArea>
    );
}
