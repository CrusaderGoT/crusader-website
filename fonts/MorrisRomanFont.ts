import localFont from "next/font/local";

const MorrisRoman = localFont({
    src: [
        {
            path: "./morrisroman/MorrisRoman-Black.ttf",
            weight: "normal",
        },
        {
            path: "./morrisroman/MorrisRomanAlternate-Black.ttf",
            weight: "bold",
        },
    ],
    variable: "--font-morrisRoman",
});

export default MorrisRoman;
