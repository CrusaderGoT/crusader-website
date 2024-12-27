// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

import "./globals.css";
//import { NavBar } from "./ui/nav";
import { spaceMono } from "./fonts/google";
import { Metadata } from "next";


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
        <MantineProvider>
          {/**<div className="
          max-w-[1170px] my-0 mx-auto
          h-screen max-h-max flex
          ">
            <NavBar />
            
            <div className="flex-1 relative">
              {children}
            </div>
          </div>*/}
          {children}
        </MantineProvider>
        
        
      </body>
    </html>
  );
}
