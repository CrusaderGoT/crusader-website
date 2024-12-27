"use client"

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import { links } from "./links";
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { quickSand } from '../fonts/google';


export function Shell({ children, }: { children: React.ReactNode; } ) {
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
			padding={"md"}
		>
			<AppShell.Header>
				<Group h={"100%"} px={"md"}>
					<Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size={"sm"} />
					<Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size={"sm"} />
					< NavProfileImg />
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p={"md"}>
				<NavLinks />
			</AppShell.Navbar>


			<AppShell.Main>{ children }</AppShell.Main>
		</AppShell>
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
      w-[30px] h-full my-2
      rounded-full bg-cover bg-center bg-no-repeat relative
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