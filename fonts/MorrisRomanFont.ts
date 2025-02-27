import localFont from "next/font/local";

const MorrisRoman = localFont({
  src: [
    {
      path: "./morrisroman/MorrisRoman-Black.ttf"
    },
    {
      path: "./morrisroman/MorrisRomanAlternate-Black.ttf"
    },
  ],
  variable: "--font-morrisRoman",
});

export default MorrisRoman