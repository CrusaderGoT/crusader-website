"use client"

import Image from "next/image";
import { quickSand } from "../layout";
import Link from "next/link"
import { links } from "./links";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export function NavBar() {
  return (
    <aside className={`
    sm:h-full sm:w-[300px] sm:pt-[4em] sm:pb-[40px] p-1
    sm:overflow-y-scroll sm:float-left z-[1001] bg-[#f2f3f7]
    text-black dark:text-white dark:bg-black
    flex sm:flex-col
    `}>
      <div className="text-center h-max w-full
      items-center justify-center flex sm:flex-col">
        <NavProfileImg />
        <NavProfileTitle />
      </div>
      <NavLinks />
      <NavFooter />
    </aside>
  )
}

function NavProfileImg() {
  return (
    <Image
      src={"/images/nav_pimg.jpg"}
      height={480}
      width={636}
      alt="my navbar profile image"
      className={`
      sm:w-[150px] sm:h-[150px] mx-auto my-0 mb-[30px]
      w-[80px] h-[80px]
      rounded-full bg-cover bg-center bg-no-repeat

      `} />
  )
}

function NavTitle() {
  return (
    <p>CrusaderGoT</p>
  )
}

function NavProfileTitle() {
  return (
    <div className="hidden sm:block">
      <h1 className="font-bold text-[22px] mb-[.5em] w-full">Enemchukwu Emeka</h1>
      <span className="mb-[2em] text-[12px] text-center">Python | Web  Developer in Nigeria</span>
    </div>

  )
}

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={`
    ${quickSand.className} antialiased
    w-full h-full relative min-h-[55px] mb-[20px]
    border border-solid border-transparent
    md:text-[16px] box-border
    sm:table self-center
    `}>
      <ul className={`
      m-1 text-center p-0 sm:pt-4 list-disc
      flex sm:flex-col items-center h-full
      justify-between flex-wrap
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
    text-[rgba(0,0,0,0.5)] py-0 px-[20px] w-full
    hidden sm:block dark:text-white
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
