"use client"

import { quickSand } from "../fonts/google";


export function NavBar() {
  return (
    <aside className={`
    h-full w-[300px] pt-[4em] pb-[40px]
    overflow-y-scroll float-left z-[1001] bg-[#f2f3f7]
    text-black dark:text-white dark:bg-black
    `}>
      <div className="text-center flex flex-col place-items-center">
        {/*<NavProfileImg />*/}
        <NavProfileTitle />
      </div>
      {/*<NavLinks />*/}
      <NavFooter />
    </aside>
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
