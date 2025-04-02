import localFont from "next/font/local";

const Naluka = localFont({
    src: [
        {
            path: "./naluka/Naluka.ttf",
            weight: "normal",
        },
        {
            path: "./naluka/Naluka.otf",
            weight: "bold",
        },
    ],
    variable: "--font-Naluka",
});

export default Naluka;
