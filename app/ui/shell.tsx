"use client"

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { links } from "./links";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { quickSand } from '../fonts/google';



interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
	const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

	return (
		<AppShell
			header={{ height: { base: 60, md: 70, lg: 80 } }}
			navbar={{
        width: { base: 200, md: 300, lg: 400 },
			breakpoint: 'sm',
			collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
			}}
className='h-[100vh] w-[100vh]'
		>
			<AppShell.Header>
				<Group h={"100%"} px={"md"} className='flex'>
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size={"sm"} />
				<Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size={"sm"} />
        <div className='flex flex-row-reverse text-black w-full flex-1'>
        <NavProfileImg />
        <HeaderTitle />
        </div>
        
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p={"md"} className="text-center flex flex-col place-items-center overflow-y-auto">
        <NavProfileImg />
        <NavProfileTitle />
				<NavLinks />

        {/*<AppShell.Footer p="md"> <NavFooter /> </AppShell.Footer>*/}
			</AppShell.Navbar>

			<AppShell.Main className='flex h-[100vh]'>
        {children}
      </AppShell.Main>

		</AppShell>
	)
}

function HeaderTitle() {
  return (
    <div className='place-self-center'>
      <span><p className='font-bold text-[18px]'>CrusaderGoT</p></span>
    </div>
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
      h-[50px] w-[50px] py-2 px-2
      rounded-full
      `} />
  );
}

function NavLinks() {
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
                text-[rgba(0,0,0,0.7)]
                hover:text-black
                underline-offset-4 ${clsx({'underline text-black': pathname === link.href})}
                uppercase text-[12px] ease-in duration-300
                
                `}>{link.name}</Link>
              </li>
              
            );
        })}
      </ul>

    </nav>
  );
}

function NavProfileTitle() {
  return (
    <div className='text-black mb-3'>
      <h1 className="font-bold text-[22px] mb-[.5em] w-full ">Enemchukwu Emeka</h1>
      <span className="text-[12px] text-center">Python | Web  Developer in Nigeria</span>
    </div>

  );
}

export function NavFooter() {
  return (
    <footer className={`
    ${quickSand.className}
    text-[15px] text-center font-normal
    text-[rgba(0,0,0,0.5)] 
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

