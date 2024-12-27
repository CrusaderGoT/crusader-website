"use client"

import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';


export function Shell() {
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
      w-[150px] h-[150px] mx-auto my-0 mb-[30px]
      rounded-full bg-cover bg-center bg-no-repeat relative
      `} />
  );
}
