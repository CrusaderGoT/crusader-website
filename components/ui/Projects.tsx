"use client";

import { githubRepositories as repositories } from "@/lib/githubSDK";

import {
    Badge,
    Button,
    Card,
    Container,
    Group,
    Image,
    ScrollArea,
    SimpleGrid,
    Text,
} from "@mantine/core";

export function Projects() {
    return (
        <Container size={"xl"}>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
                {repositories.data.map((repository) => {
                    return <RepoCard key={repository.id} repo={repository} />;
                })}
            </SimpleGrid>
        </Container>
    );
}

type RepoCardProps = {
    repo: (typeof repositories.data)[0];
};

function RepoCard({ repo }: RepoCardProps) {
    // The repo object should contain properties like:
    // name, description, language, stars, forks, owner, and ownerAvatar
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            {/* Owner avatar */}
            {repo.owner.avatar_url && (
                <Card.Section>
                    <Image
                        src={repo.owner.avatar_url}
                        height={160}
                        alt={`${repo.owner} avatar`}
                    />
                </Card.Section>
            )}

            {/* Repository name and primary language badge */}
            <Group
                justify="space-between"
                style={{ marginTop: 15, marginBottom: 5 }}
            >
                <Text fw={500} size="lg">
                    {repo.name}
                </Text>
                {repo.language && (
                    <Badge color="pink" variant="light">
                        {repo.language}
                    </Badge>
                )}
            </Group>

            {/* Repository description */}
            {repo.description && (
                <Text
                    size="sm"
                    component={ScrollArea}
                    h={"50"}
                    style={{ lineHeight: 1.5, marginBottom: 15 }}
                >
                    {repo.description}
                </Text>
            )}

            {/* Repository stats */}
            <Group justify="space-between">
                <Button variant="light" color="blue" fullWidth>
                    Stars: {repo.stargazers_count}
                </Button>
                <Button variant="light" color="teal" fullWidth>
                    Forks: {repo.forks}
                </Button>
            </Group>
        </Card>
    );
}
