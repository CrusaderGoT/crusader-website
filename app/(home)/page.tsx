"use client"

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import styles from "./home.module.css"
import { Paper, Text, Title } from '@mantine/core';


const homeCards = [
  {
    image: "/images/nav_pimg.jpg",
    title: 'Best forests to visit in North America',
    category: 'programmer',
  },
  {
    image: "/images/nav_pimg.jpg",
    title: 'Best forests to visit in North America',
    category: 'writer',
  },
  {
    image: "/images/nav_pimg.jpg",
    title: 'Best forests to visit in North America',
    category: 'otaku',
  },
]

export default function Home() {
  return <Main />;
}

function Main() {
  const autoplay = useRef(Autoplay(
    { delay: 5000 , stopOnInteraction: false,
    stopOnMouseEnter: true}
    ));

  return (
    <Carousel
      plugins={[autoplay.current]}
      withIndicators
      loop
      slideGap="md"
      align="center"
      slideSize="100%"
      height="100%"
      className={`flex-1 overflow-hidden`}
      classNames={styles}
    >
      {homeCards.map((data, index) => (
        <Carousel.Slide
        key={index}
        className='flex justify-center items-center'
        >
          <Card {...data} />
        </Carousel.Slide>
        ))}
    </Carousel>
  );
}

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
    shadow='md'
    p={"xl"}
    radius={"md"}
    style={{ backgroundImage: `url(${image})` }}
    className='w-[98%] h-[98%] flex flex-col justify-between bg-cover bg-center'
    >
      <div>
        <Text 
        size='xs' c="black"
        opacity={0.7}
        className='font-[700] uppercase cursor-default'
        >
          {category}
        </Text> 
      </div>

      <div>
        <Title
        order={1} c={"yellow"}
        className='font-[900] text-[32px] cursor-default leading-[1.2] mt-[5px]'
        >
          {title}
        </Title>
      </div>

    </Paper>
  )
}
