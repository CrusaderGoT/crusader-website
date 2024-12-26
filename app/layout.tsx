import "./globals.css";
import { NavBar } from "./ui/nav";
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
    <html lang="en">
      <body
        className={`${spaceMono.className} antialiased`}
      >
        <div className="
        max-w-[1170px] my-0 mx-auto
        h-screen max-h-max flex
        ">
          <NavBar />
          
          <div className="flex-1 relative">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
