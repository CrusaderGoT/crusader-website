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
    const autoplay = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnFocusIn: false,
        })
    );
    return (
        <Flex justify="center" align="center" h={3000} mah={"80vh"}>
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
        image: "/carouselImages/pythonCarouselImage.jpg",
        language: "Python",
        description:
            "Python is a high-level, interpreted programming language. It is known for its simplicity and readability.",
        helloWorld: "print('Hello, World!')",
        languageCode: "py",
    },
    {
        image: "/carouselImages/typescriptCarouselImage.jpg",
        language: "TypeScript",
        description:
            "TypeScript is a superset of JavaScript that adds static typing to the language.",
        helloWorld: "console.log('Hello, World!');",
        languageCode: "ts",
    },
    {
        image: "/carouselImages/htmlCarouselImage.jpg",
        language: "HTML",
        description:
            "HTML is the standard markup language for creating web pages.",
        helloWorld: "<h1>Hello, World!</h1>",
        languageCode: "html",
    },
    {
        image: "/carouselImages/cssCarouselImage.jpg",
        language: "CSS",
        description:
            "CSS describes how HTML elements should be displayed on the screen.",
        helloWorld: "h1 { color: blue; }",
        languageCode: "css",
    },
    {
        image: "/carouselImages/javascriptCarouselImage.jpg",
        language: "JavaScript",
        description:
            "JavaScript is the programming language of the web. It is used to make web pages interactive.",
        helloWorld: "console.log('Hello, World!');",
        languageCode: "js",
    },
    {
        image: "/carouselImages/englishCarouselImage.jpg",
        language: "English",
        description:
            "English is a West Germanic language that was first spoken in early medieval England.",
        helloWorld: "Hello, World!",
        languageCode: "plaintext",
    },
    {
        image: "/carouselImages/igboCarouselImage.jpg",
        language: "Igbo",
        description:
            "Igbo is the principal native language of the Igbo people, of southeastern Nigeria.",
        helloWorld: "Uwa, Kedu!",
        languageCode: "plaintext",
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
                                c="white"
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
