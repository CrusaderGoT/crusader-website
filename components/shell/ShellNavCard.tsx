"use client";

import { useEffect, useState } from "react";

import {
    Affix,
    Avatar,
    Blockquote,
    Container,
    Flex,
    Group,
    HoverCard,
    Image as MantineImage,
    Skeleton,
    Stack,
    Text,
    Title,
    Transition,
} from "@mantine/core";

import { useHover } from "@mantine/hooks";

import Image from "next/image";

import { IconInfoCircle, IconMapPin } from "@tabler/icons-react";

const quotes = [
    {
        authour: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
        authour: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        authour: "Leonardo da Vinci",
        quote: "Simplicity is the ultimate sophistication.",
    },
    {
        authour: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
        authour: "Steve Jobs",
        quote: "Stay hungry, stay foolish.",
    },
];

export function NavCard() {
    const { hovered, ref } = useHover();

    const [randomQuote, setRandomQuote] = useState<(typeof quotes)[0] | null>(
        null
    );

    useEffect(() => {
        // Compute the random quote only on the client.
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    // Optionally render a fallback during SSR/hydration
    if (!randomQuote) {
        return (
            <Flex direction="column" align="center" justify="center" p="xs">
                <Skeleton height={40} circle mb="xs" />
                <Skeleton height={100} width={"300"} maw={"80%"} />
            </Flex>
        );
    }
    const Icon = <IconInfoCircle />;

    return (
        <Stack>
            <HoverCard>
                <HoverCard.Target ref={ref}>
                    <Avatar
                        src="/images/nav_pimg.jpg"
                        alt="Enemchukwu Chukwuemeka's avatar"
                        name="Enemchukwu Chukwuemeka"
                        color="gold"
                        size="xl"
                        mx={"auto"}
                        mt="xs"
                    />
                </HoverCard.Target>
                <Transition
                    mounted={hovered}
                    transition="slide-up"
                    timingFunction="linear"
                >
                    {(transitionStyles) => (
                        <HoverCard.Dropdown hidden>
                            <Affix
                                style={transitionStyles}
                                position={{
                                    top: 150,
                                    left: 20,
                                    right: 20,
                                    bottom: 150,
                                }}
                            >
                                <Container size={"sm"}>
                                    <MantineImage
                                        component={Image}
                                        src={"/images/nav_pimg.jpg"}
                                        alt="Enemchukwu Chukwuemeka's Picture"
                                        radius={"md"}
                                        width={365}
                                        height={480}
                                    />
                                </Container>
                            </Affix>
                        </HoverCard.Dropdown>
                    )}
                </Transition>
            </HoverCard>

            <Group mx={"auto"} gap={5}>
                <IconMapPin size={18} />
                <Text fz={{ base: "md", sm: "lg", md: "xl" }} c={"green"}>
                    Nigeria🏁
                </Text>
            </Group>

            <Title
                order={4}
                c={"gold"}
                mx={"auto"}
                fz={{ base: "md", sm: "lg", md: "xl" }}
                fw={"normal"}
            >
                I am a Web Developer
            </Title>

            <Blockquote
                color="gold"
                cite={randomQuote.authour}
                icon={Icon}
                iconSize={25}
                mx={"xs"}
                p={"xs"}
            >
                <Text size="sm">{randomQuote.quote}</Text>
            </Blockquote>
        </Stack>
    );
}
