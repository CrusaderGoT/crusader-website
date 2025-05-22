"use client";

import {
    Avatar,
    Button,
    Card,
    Center,
    Divider,
    Group,
    Image,
    Stack,
    Text,
} from "@mantine/core";

import { profileData } from "@/components/data/profileData";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function ProfileCard() {
    const router = useRouter();

    return (
        <Center my={{ base: "lg", md: "xl" }}>
            <Card>
                <Card.Section>
                    <Image src={profileData.picture} h={200} style={{}} />
                </Card.Section>
                <Avatar
                    src={profileData.picture}
                    alt="Enemchukwu Chukwuemeka's avatar"
                    name="Enemchukwu Chukwuemeka"
                    size={200}
                    radius={200}
                    mx="auto"
                    mt={-100}
                />
                <Stack>
                    <Text ta={"center"} fz="lg">
                        {profileData.name}
                    </Text>

                    <Text ta={"center"} fz="md" c={"gold"}>
                        {profileData.profession}
                    </Text>

                    <Group justify="center">
                        <Group wrap="nowrap" gap={5}>
                            <IconAt stroke={1.5} size={16} />
                            <Text
                                fz="sm"
                                component="a"
                                href="mailto:enememka44@gmail.com"
                            >
                                {profileData.email}
                            </Text>
                        </Group>

                        <Divider orientation="vertical" variant="solid" />

                        <Group wrap="nowrap" gap={5}>
                            <IconPhoneCall stroke={1.5} size={16} />
                            <Text
                                fz="sm"
                                component="a"
                                href="tel:+2347040764431"
                            >
                                {profileData.phone}
                            </Text>
                        </Group>
                    </Group>
                </Stack>

                <Group justify="space-around" mt={"md"}>
                    {profileData.likes.map((like, ind) => (
                        <Text key={ind} fz={"xs"} c="dimmed">
                            {like}
                        </Text>
                    ))}
                </Group>

                <Button
                    variant="light"
                    color="green"
                    fullWidth
                    mt="md"
                    onClick={() => router.push("/contact")}
                >
                    Send message
                </Button>
            </Card>
        </Center>
    );
}
