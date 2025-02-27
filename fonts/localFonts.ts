import localFont from "next/font/local";

export const GreatVictorian = localFont({
  src: [
    {
      path: "fonts/greatvictorian/GreatVictorian-Standard.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/greatvictorian/GreatVictorian-Swashed.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/greatvictorian/GreatVictorian-SwashedSC.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-greatVictorian",
});

export const MorrisRoman = localFont({
  scr: [
    {
      path: "fonts/morrisroman/MorrisRoman-Black.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/morrisroman/MorrisRomanAlternate-Black.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-morrisRoman",
});
