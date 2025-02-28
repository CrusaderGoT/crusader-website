"use client";

import { useEffect, useState } from "react";

import {
    Affix,
    Avatar,
    Blockquote,
    Center,
    Container,
    Flex,
    HoverCard,
    Image as MantineImage,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core";

import Image from "next/image";

import { IconInfoCircle } from "@tabler/icons-react";

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
        <Center>
            <Stack>
                <HoverCard>
                    <HoverCard.Target>
                        <Avatar
                            src="/images/nav_pimg.jpg"
                            alt="Enemchukwu Chukwuemeka's avatar"
                            name="Enemchukwu Chukwuemeka"
                            color="gold"
                            size="md"
                            mx={"auto"}
                            mt="xs"
                        />
                    </HoverCard.Target>

                    <HoverCard.Dropdown hidden>
                        <Affix
                            position={{
                                top: 100,
                                left: 100,
                                right: 100,
                                bottom: 100,
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
                </HoverCard>

                <Blockquote
                    color="gold"
                    cite={randomQuote.authour}
                    icon={Icon}
                    mx={"xs"}
                    iconSize={25}
                    p={"xs"}
                >
                    <Text size="sm">{randomQuote.quote}</Text>
                </Blockquote>
            </Stack>
        </Center>
    );
}
