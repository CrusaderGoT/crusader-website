"use client"

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';


const images = [
  "/images/nav_pimg.jpg",
  "/images/nav_pimg.jpg",
  "/images/nav_pimg.jpg"
];

export default function Home() {
  return <Main />;
}

function Main() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {images.map((url, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={url}
            alt="image"
            width={480} // Specify appropriate width
            height={636} // Specify appropriate height
          />
        </Carousel.Slide>
        ))}
    </Carousel>
  );
}
