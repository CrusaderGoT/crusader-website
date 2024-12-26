"use client"

import Image from "next/image";
import { quickSand } from "../fonts/google";
import Link from "next/link"
import { links } from "./links";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export function NavBar() {
  return (
    <aside className={`
    h-full w-[300px] pt-[4em] pb-[40px]
    overflow-y-scroll float-left z-[1001] bg-[#f2f3f7]
    text-black dark:text-white dark:bg-black
    `}>
      <div className="text-center flex flex-col place-items-center">
        <NavProfileImg />
        <NavProfileTitle />
      </div>
      <NavLinks />
      <NavFooter />
    </aside>
  )

}

export function NavProfileImg() {
  return (
    <Image
      src={"/images/nav_pimg.jpg"}
      height={480}
      width={636}
      alt="my navbar profile image"
      className={`
      w-[150px] h-[150px] mx-auto my-0 mb-[30px]
      rounded-full bg-cover bg-center bg-no-repeat relative
      `} />
  )
}
export function NavProfileTitle() {
  return (
    <>
      <h1 className="font-bold text-[22px] mb-[.5em] w-full">Enemchukwu Emeka</h1>
      <span className="mb-[2em] text-[12px] text-center">Python | Web  Developer in Nigeria</span>
    </>

  )
}
export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={`
    ${quickSand.className} antialiased
    w-full h-full relative min-h-[55px] mb-[20px]
    border border-solid border-transparent
    md:text-[16px] table box-border
    `}>
      <ul className={`
      m-0 text-center p-0 list-disc
      flex flex-col place-items-center
      space-y-[7px] 
      `}>
        {links.map((link) => {
            return (
              <li className="
              p-0 m-0 ml-[10px] list-none w-fit
              text-[500] tracking-[1px]
              "
              key={link.name}>
                <Link
                key={link.name}
                href={link.href}
                className={`
                py-[10px] px-0 relative
                text-[rgba(0,0,0,0.7)] dark:text-[rgba(248,247,247,0.7)]
                hover:text-black dark:hover:text-white
                underline-offset-4 ${clsx({'underline text-black dark:text-white': pathname === link.href})}
                uppercase text-[12px] ease-in duration-300
                
                `}>{link.name}</Link>
              </li>
              
            );
        })}
      </ul>

    </nav>
  );
}

function NavFooter() {
  return (
    <footer className={`
    ${quickSand.className}
    text-[15px] text-center font-normal
    tejxt-[rgba(0,0,0,0.5)] py-0 px-[20px] w-full
    `}>
      <p>
        <small>
        © Copyright ©2024 All rights reserved | This template is made with  by Colorlib
        Demo Images: Unsplash.com
        </small>
      </p>
    </footer>
  );
}
