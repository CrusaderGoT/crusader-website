"use client"

import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Shell() {
	const [opened, { toggle }] = useDisclosure()

	return (
		<AppShell
			header={{ height: { base: 60, md: 70, lg: 80 } }}
			navbar={{
			width: { base: 200, md: 300, lg: 400 },
			breakpoint: 'sm',
			collapsed: { mobile: !opened },
			}}
			padding={"md"}
		>
			<AppShell.Header>
				<Group>
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size={"sm"} />
				</Group>
			</AppShell.Header>
		</AppShell>
	)
}