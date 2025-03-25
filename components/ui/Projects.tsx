"use client";

import { RepoLanguagesType, type RepositoryType } from "@/lib/githubSDK";

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

type ProjectsProp = {
    repositoriesWithLanguages: {
        repo: RepositoryType;
        langs: RepoLanguagesType | null;
    }[];
};

export function Projects({ repositoriesWithLanguages }: ProjectsProp) {
    return (
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
            spacing="sm"
            verticalSpacing="sm"
        >
            {repositoriesWithLanguages.map(({ repo, langs }) => {
                return <RepoCard key={repo.id} repo={repo} langs={langs} />;
            })}
        </SimpleGrid>
    );
}

type RepoCardProp = {
    repo: RepositoryType;
    langs: RepoLanguagesType | null;
};
function RepoCard({ repo, langs }: RepoCardProp) {
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
                    <Anchor href={repo.html_url} target="_blank" fz="xs">
                        Github
                    </Anchor>
                    {repo.homepage && (
                        <Anchor href={repo.homepage} target="_blank" fz="xs">
                            Website
                        </Anchor>
                    )}
                </Group>
                <Divider mb="xs" />
            </Card.Section>

            <Card.Section mx="auto" my="auto" mih={20} mah={20}>
                <Group wrap="nowrap" align="center">
                    <Avatar size="sm" name={repo.name} />
                    <Title textWrap="pretty" order={4} fw="normal">
                        {repo.name}
                    </Title>
                </Group>
            </Card.Section>

            <Card.Section>
                <Divider my="xs" />
                <Stack>
                    <Text size="xs">Created: {repo.created_at}</Text>
                    <Text fz="xs">Last Updated: {repo.updated_at}</Text>
                </Stack>
                <Divider mt="xs" />
            </Card.Section>

            <Card.Section component={ScrollArea} offsetScrollbars flex={1}>
                <Box p="xs" mih={50}>
                    <Text>
                        {repo.description ?? "No Available Description"}
                    </Text>
                </Box>
            </Card.Section>

            <Card.Section>
                <Divider mb="xs" />
                <Group preventGrowOverflow={false}>
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
                    {langs
                        ? Object.keys(langs).map((language) => (
                              <Badge
                                  key={language}
                                  variant="light"
                                  color="yellow"
                                  size="sm"
                              >
                                  {language}
                              </Badge>
                          ))
                        : repo.language && (
                              <Badge
                                  key={repo.language}
                                  variant="light"
                                  color="yellow"
                                  size="sm"
                              >
                                  {repo.language}
                              </Badge>
                          )}
                </Group>
            </Card.Section>
        </Card>
    );
}
