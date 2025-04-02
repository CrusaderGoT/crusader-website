// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/carousel/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/tiptap/styles.css";

import {
    ColorSchemeScript,
    DEFAULT_THEME,
    MantineColorsTuple,
    MantineProvider,
    createTheme,
    mantineHtmlProps,
    virtualColor,
} from "@mantine/core";

import { Notifications } from "@mantine/notifications";

import { Analytics } from "@vercel/analytics/next";

import { Metadata } from "next";

import GreatVictorian from "@/fonts/GreatVictorianFont";
import Naluka from "@/fonts/NalukaFont";
import WastedVindey from "@/fonts/WastedVindey";

const goldThemeColor: MantineColorsTuple = [
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
    colors: {
        gold: goldThemeColor,
        goldVirtual: virtualColor({
            name: "gold",
            dark: "gold.6",
            light: "gold.8",
        }),
    },
    primaryColor: "gold",
    defaultGradient: { from: "gold.5", to: "gold.8", deg: 90 },
    fontFamily: `${WastedVindey.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    headings: {
        fontFamily: `${GreatVictorian.style.fontFamily}, ${Naluka.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    },
});

export const metadata: Metadata = {
    title: {
        template: "CrusaderGoT | %s",
        default: "CrusaderGoT",
    },
    creator: "Enemchukwu Chukwuemeka",
    keywords: ["Enemchukwu Chukwuemeka", "Next.js", "React", "JavaScript"],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/icon.png",
    },
    openGraph: {
        title: "CrusaderGoT",
        description:
            "Enemchukwu Chukwuemeka is a Web Developer. Who Specializes in Python and Typescript Frameworks",
        url: "https://crusadergot.vercel.app",
        siteName: "CrusaderGoT",
        images: [
            {
                url: "https://crusadergot.vercel.app/images/nav_pimg.jpg", // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: "https://crusadergot.vercel.app/images/nav_pimg.jpg", // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "en_US",
        type: "website",
    },
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
            <body>
                <MantineProvider defaultColorScheme="dark" theme={theme}>
                    <Notifications />
                    {children}
                    <Analytics />
                </MantineProvider>
            </body>
        </html>
    );
}
