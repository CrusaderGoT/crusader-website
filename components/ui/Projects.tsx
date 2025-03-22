"use client";

import { useEffect, useState } from "react";

import {
    type RepoLanguagesType,
    type RepositoryType,
    getRepoLanguages,
} from "@/lib/githubSDK";

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
            cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
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
    const {
        owner: { login },
        name,
        homepage,
        html_url,
        topics,
        created_at,
        updated_at,
        description,
        language,
    } = repo;

    const [languages, setLanguages] = useState<RepoLanguagesType | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getRepoLanguages({
                    owner: login,
                    repo: name,
                });
                if (data.langs) {
                    setLanguages(data.langs);
                }
            } catch (error) {
                console.error("Error loading languages:", error);
            }
        })();
    }, [login, name]);

    return (
        <Card
            h={300}
            component={Flex}
            shadow="md"
            radius="lg"
            withBorder
            p="lg"
            c="gold"
        >
            <Card.Section>
                <Group justify="space-between">
                    <Anchor href={html_url} target="_blank" fz="xs">
                        Github
                    </Anchor>
                    {homepage && (
                        <Anchor href={homepage} target="_blank" fz="xs">
                            Website
                        </Anchor>
                    )}
                </Group>
                <Divider mb="xs" />
            </Card.Section>

            <Card.Section mx="auto" my="auto" mih={20} mah={20}>
                <Group wrap="nowrap" align="center">
                    <Avatar size="sm" name={name} />
                    <Title textWrap="pretty" order={4} fw="normal">
                        {name}
                    </Title>
                </Group>
            </Card.Section>

            <Card.Section>
                <Divider my="xs" />
                <Stack>
                    <Text size="xs">Created: {created_at}</Text>
                    <Text fz="xs">Last Updated: {updated_at}</Text>
                </Stack>
                <Divider mt="xs" />
            </Card.Section>

            <Card.Section component={ScrollArea} offsetScrollbars flex={1}>
                <Box p="xs">
                    <Text>{description ?? "No Available Description"}</Text>
                </Box>
            </Card.Section>

            <Card.Section>
                <Divider mb="xs" />
                <Group preventGrowOverflow={false}>
                    {topics &&
                        topics.map((topic) => (
                            <Badge
                                key={topic}
                                variant="light"
                                color="yellow"
                                size="sm"
                            >
                                {topic}
                            </Badge>
                        ))}
                    {languages
                        ? Object.keys(languages).map((language) => (
                              <Badge
                                  key={language}
                                  variant="light"
                                  color="yellow"
                                  size="sm"
                              >
                                  {language}
                              </Badge>
                          ))
                        : language && (
                              <Badge
                                  key={language}
                                  variant="light"
                                  color="yellow"
                                  size="sm"
                              >
                                  {language}
                              </Badge>
                          )}
                </Group>
            </Card.Section>
        </Card>
    );
}
