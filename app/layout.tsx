// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";

import {
    ColorSchemeScript,
    MantineColorsTuple,
    MantineProvider,
    createTheme,
    mantineHtmlProps,
} from "@mantine/core";

import { Metadata } from "next";

import GreatVictorian from "@/fonts/GreatVictorianFont";
import MorrisRoman from "@/fonts/MorrisRomanFont";

const myColor: MantineColorsTuple = [
    "#fffce1",
    "#fff8cb",
    "#ffef9a",
    "#ffe764",
    "#ffdf38",
    "#ffdb1c",
    "#ffd809",
    "#e3bf00",
    "#caaa00",
    "#ae9200",
];

const theme = createTheme({
    autoContrast: true,
    luminanceThreshold: 0.4,
    defaultRadius: "md",
    primaryShade: { dark: 7, light: 9 },
    colors: { myColor },
    fontFamily: `${MorrisRoman.style.fontFamily}`,
    headings: { fontFamily: `${GreatVictorian.style.fontFamily}` },
});

export const metadata: Metadata = {
    title: "CrusaderGoT",
    description: "My portfolio website",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript defaultColorScheme="dark" />
            </head>
            <body className={`antialiased`}>
                <MantineProvider defaultColorScheme="dark" theme={theme}>
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
