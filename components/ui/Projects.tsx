"use client";

import { type RepositoryType } from "@/lib/githubSDK";

import {
    Anchor,
    Avatar,
    Badge,
    Box,
    Card,
    Divider,
    Flex,
    Group,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";

export function Projects({ repositories }: { repositories: RepositoryType[] }) {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 5 }}
            spacing="sm"
            verticalSpacing="sm"
        >
            {repositories.map((repository) => {
                return <RepoCard key={repository.id} repo={repository} />;
            })}
        </SimpleGrid>
    );
}

function RepoCard({ repo }: { repo: RepositoryType }) {
    return (
        <Card
            h={300}
            component={Flex}
            shadow="md"
            radius="lg"
            withBorder
            p="lg"
            c={"gold"}
        >
            <Card.Section>
                <Group justify="space-between">
                    <Anchor href={repo.html_url} target="_blank" fz={"xs"}>
                        Github
                    </Anchor>

                    {repo.homepage && (
                        <Anchor href={repo.homepage} target="_blank" fz={"xs"}>
                            Website
                        </Anchor>
                    )}
                </Group>

                <Divider mb={"xs"} />
            </Card.Section>

            <Card.Section mx={"auto"}>
                <Group
                    mih={20}
                    mah={20}
                    my={"auto"}
                    wrap="nowrap"
                    align="center"
                >
                    <Avatar size={"sm"} name={repo.name} />
                    <Title textWrap="pretty" order={4} fw={"normal"}>
                        {repo.name}
                    </Title>
                </Group>
            </Card.Section>

            <Card.Section>
                <Divider my={"xs"} />
                <Stack>
                    <Text size={"xs"}>Created: {repo.created_at}</Text>
                    <Text fz={"xs"}>Last Updated: {repo.updated_at}</Text>
                </Stack>
                <Divider mt={"xs"} />
            </Card.Section>

            <Card.Section
                flex={1}
                component={ScrollArea}
                mih={50}
                offsetScrollbars
            >
                <Box p={"xs"}>
                    <Text ta={"justify"}>
                        {repo.description ?? "No Availble Description"}
                    </Text>
                </Box>
            </Card.Section>

            <Card.Section>
                <Divider mb={"xs"} />
                <Group flex={1}>
                    {repo.topics &&
                        repo.topics.map((topic) => (
                            <Badge
                                key={topic}
                                variant="light"
                                color="yellow"
                                size="sm"
                            >
                                {topic}
                            </Badge>
                        ))}
                    <Badge
                        key={repo.language}
                        variant="light"
                        color="yellow"
                        size="sm"
                    >
                        {repo.language}
                    </Badge>
                </Group>
            </Card.Section>
        </Card>
    );
}
