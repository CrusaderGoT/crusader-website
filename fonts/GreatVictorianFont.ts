import localFont from "next/font/local";

const GreatVictorian = localFont({
    src: [
        {
            path: "./greatvictorian/GreatVictorian-Standard.otf",
            weight: "normal",
        },
        {
            path: "./greatvictorian/GreatVictorian-Swashed.otf",
            weight: "bold",
        },
        {
            path: "./greatvictorian/GreatVictorian-SwashedSC.otf",
            weight: "900",
        },
    ],
    variable: "--font-greatVictorian",
});

export default GreatVictorian;
