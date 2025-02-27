import localFont from "next/font/local";

const GreatVictorian = localFont({
  src: [
    {
      path: "./greatvictorian/GreatVictorian-Standard.otf"
    },
    {
      path: "./greatvictorian/GreatVictorian-Swashed.otf"
    },
    {
      path: "./greatvictorian/GreatVictorian-SwashedSC.otf"
    },
  ],
  variable: "--font-greatVictorian",
});

export default GreatVictorian;
