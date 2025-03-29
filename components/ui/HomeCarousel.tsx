"use client";

import { useRef } from "react";

import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { CodeHighlight } from "@mantine/code-highlight";
import {
    BackgroundImage,
    Center,
    Code,
    Flex,
    Highlight,
    Paper,
    Stack,
} from "@mantine/core";

import { slides } from "@/components/data/homeData";
import Naluka from "@/fonts/NalukaFont";

export function HomeCarousel() {
    const autoplay = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnFocusIn: false,
        })
    );
    return (
        <Flex h={3000} mah={"85vh"}>
            <Carousel
                height={"100%"}
                withIndicators
                style={{ flex: 1 }}
                maw={"100%"}
                slideSize="100%"
                slideGap="sm"
                controlsOffset="xs"
                controlSize={30}
                loop
                plugins={[autoplay.current]}
            >
                <Slides />
            </Carousel>
        </Flex>
    );
}

function Slides() {
    const slideData = slides.map((slide, index) => (
        <Carousel.Slide key={`${slide.language}-${index}`}>
            <Paper
                style={{
                    height: "100%",
                    maxHeight: "100%",
                }}
            >
                <BackgroundImage src={slide.image} h={"100%"} w={"100%"}>
                    <Stack
                        justify="space-between"
                        h={"100%"}
                        w={"100%"}
                        gap={"xl"}
                        p="xs"
                    >
                        <Code
                            style={{
                                width: "fit-content",
                            }}
                        >
                            {slide.language}
                        </Code>
                        <Center>
                            <Highlight
                                ta="center"
                                p={{ base: 0, sm: "md", md: "lg", lg: "xl" }}
                                ff={`${Naluka.style.fontFamily}`}
                                highlight={slide.language}
                                highlightStyles={{
                                    backgroundImage: slide.gradient,
                                    fontSize: "4rem",
                                    padding: "2px",
                                    fontWeight: 700,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                fz={"2rem"}
                                lh={1.2}
                                c={slide.c}
                                style={{
                                    backdropFilter: `
                                    invert(100%)
                                    blur(3px)
                                    brightness(70%)
                                    `,
                                    borderRadius: 12,
                                }}
                            >
                                {slide.description}
                            </Highlight>
                        </Center>

                        <CodeHighlight
                            code={slide.helloWorld}
                            language={slide.languageCode}
                            withCopyButton={false}
                            style={{
                                width: "fit-content",
                                alignSelf: "center",
                            }}
                        />
                    </Stack>
                </BackgroundImage>
            </Paper>
        </Carousel.Slide>
    ));
    return slideData;
}
