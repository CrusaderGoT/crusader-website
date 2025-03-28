import { MantineColor } from "@mantine/core";

export type SlideProps = {
    image: string;
    language: string;
    languageCode: string;
    description: string;
    helloWorld: string;
    c: MantineColor;
    gradient: string;
};

export const slides: SlideProps[] = [
    {
        image: "/carouselImages/pythonCarouselImage.jpg",
        language: "Python",
        description:
            "Python is a high-level, interpreted programming language. It is known for its simplicity and readability.",
        helloWorld: "print('Hello, World!')",
        languageCode: "py",
        c: "black",
        gradient:
            "linear-gradient(45deg, var(--mantine-color-blue-6), var(--mantine-color-blue-6), var(--mantine-color-yellow-6), var(--mantine-color-yellow-6))",
    },
    {
        image: "/carouselImages/typescriptCarouselImage.jpg",
        language: "TypeScript",
        description:
            "TypeScript is a superset of JavaScript that adds static typing to the language.",
        helloWorld: "console.log('Hello, World!');",
        languageCode: "ts",
        c: "white",
        gradient:
            "linear-gradient(85deg, var(--mantine-color-blue-3), var(--mantine-color-blue-5))",
    },
    {
        image: "/carouselImages/htmlCarouselImage.jpg",
        language: "HTML",
        description:
            "HTML is the standard markup language for creating web pages.",
        helloWorld: "<h1>Hello, World!</h1>",
        languageCode: "html",
        c: "white",
        gradient:
            "linear-gradient(45deg, var(--mantine-color-orange-9), var(--mantine-color-orange-7))",
    },
    {
        image: "/carouselImages/cssCarouselImage.jpg",
        language: "CSS",
        description:
            "CSS describes how HTML elements should be displayed on the screen.",
        helloWorld: "h1 { color: blue; }",
        languageCode: "css",
        c: "white",
        gradient:
            "linear-gradient(120deg, var(--mantine-color-violet-9), var(--mantine-color-red-9), var(--mantine-color-green-5))",
    },
    {
        image: "/carouselImages/javascriptCarouselImage.jpg",
        language: "JavaScript",
        description:
            "JavaScript is the programming language of the web. It is used to make web pages interactive.",
        helloWorld: "console.log('Hello, World!');",
        languageCode: "js",
        c: "white",
        gradient:
            "linear-gradient(90deg, var(--mantine-color-gold-6), var(--mantine-color-gold-8))",
    },
    {
        image: "/carouselImages/englishCarouselImage.jpg",
        language: "English",
        description:
            "English is a West Germanic language that was first spoken in early medieval England.",
        helloWorld: "Hello, World!",
        languageCode: "plaintext",
        c: "white",
        gradient:
            "linear-gradient(45deg, var(--mantine-color-gold-6), var(--mantine-color-gold-8))",
    },
    {
        image: "/carouselImages/igboCarouselImage.jpg",
        language: "Igbo",
        description:
            "Igbo is the principal native language of the Igbo people, of southeastern Nigeria.",
        helloWorld: "Uwa, Kedu!",
        languageCode: "plaintext",
        c: "black",
        gradient:
            "linear-gradient(80deg, var(--mantine-color-green-9), white, var(--mantine-color-green-8))",
    },
];
