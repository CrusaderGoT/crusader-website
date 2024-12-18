import Image from "next/image";


export default function Home() {
  return (
  <div className={`
  bg-white h-full w-full flex-grow relative text-black
  `}>
    <Hero />
  </div>
  )
}

function Hero() {
  return (
    <section className="
    w-full h-full relative
    ">
      <div className="h-full w-full">
        <h1 className="
        sm:left-1/2 sm:translate-x-[-50%]
        sm:top-1/2 sm:translate-y-[50%]
        font-[700] absolute z-20
        text-center text-[20px] border
        ">
          I am a Programmer
        </h1>

        <Image
          src={"/images/nav_pimg.jpg"}
          height={480}
          width={636}
          alt="my hero image"
          priority
          className="
          sm:left-1/2 sm:translate-x-[-50%] z-10
          object-cover h-full w-auto absolute
          "
        />
      </div>
      
    </section>
  );
}

