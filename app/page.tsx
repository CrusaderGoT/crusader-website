import Image from "next/image";


export default function Home() {
  return (
  <div className={`
  bg-white h-full w-full flex-grow relative
  `}>
    <Image
    src={"/images/nav_pimg.jpg"}
    height={480}
    width={636}
    alt="my navbar profile image"
    className="h-full w-auto absolute right-0 object-contain"
    />
  </div>
  )
}
