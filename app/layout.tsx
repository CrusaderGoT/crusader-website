import "./globals.css";
import {Space_Mono, Quicksand} from "next/font/google";
import { NavBar } from "./ui/nav";


const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const quickSand = Quicksand({
  weight: ['300', "400", '500', '600', "700"],
  subsets: ["latin"],
  style: "normal",
});

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
        h-screen max-h-max flex flex-col sm:flex-row
        relative
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
