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

export function HomeCarousel() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <Flex mx={"auto"} my={"auto"} h={1000} mah={"82vh"}>
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

type SlideProps = {
    image: string;
    language: string;
    languageCode: string;
    description: string;
    helloWorld: string;
};

const slides: SlideProps[] = [
    {
        image: "/images/nav_pimg.jpg",
        language: "Python",
        description:
            "Python is a high-level, interpreted programming language. It is known for its simplicity and readability.",
        helloWorld: "print('Hello, World!')",
        languageCode: "py",
    },
    {
        image: "https://images4.alphacoders.com/128/1286188.jpg",
        language: "TypeScript",
        description:
            "TypeScript is a superset of JavaScript that adds static typing to the language.",
        helloWorld: "console.log('Hello, World!');",
        languageCode: "ts",
    },
    {
        image: "https://images.unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
        language: "HTML",
        description:
            "HTML is the standard markup language for creating web pages.",
        helloWorld: "<h1>Hello, World!</h1>",
        languageCode: "html",
    },
];

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
                                highlight={slide.language}
                                highlightStyles={{
                                    backgroundImage:
                                        "linear-gradient(90deg, var(--mantine-color-gold-6), var(--mantine-color-gold-8))",
                                    fontSize: "4rem",
                                    padding: "2px",
                                    fontWeight: 700,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                fz={"2rem"}
                                lh={1.2}
                                c="grey"
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
