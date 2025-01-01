// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

import "./globals.css";
import { spaceMono } from "./fonts/google";
import { Metadata } from "next";
import { Shell } from './ui/shell';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif, mono',
  primaryColor: 'cyan',
});

export const metadata: Metadata = {
  title: "CrusaderGoT",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${spaceMono.className} antialiased`}
      >
        <MantineProvider theme={theme}>
          
        <Shell>{children}</Shell>
          
        </MantineProvider>
        
      </body>
    </html>
  );
}
