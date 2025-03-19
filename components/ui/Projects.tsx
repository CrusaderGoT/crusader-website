"use client";

import { type RepositoryType } from "@/lib/githubSDK";

import {
    Avatar,
    Badge,
    Button,
    Card,
    Divider,
    Group,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";

export function Projects({ repositories }: { repositories: RepositoryType[] }) {
    return (
        <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
            {repositories.map((repository) => {
                return <GitHubRepoCard key={repository.id} repo={repository} />;
            })}
        </SimpleGrid>
    );
}

function RepoCard({ repo }: { repo: RepositoryType }) {
    return (
        <Card
            mah={{ base: 150, sm: 200, md: 300, lg: 400 }}
            shadow="sm"
            padding="xs"
            radius="md"
            withBorder
        >
            <Stack
                style={{
                    height: "100%",
                }}
            >
                <Group wrap="nowrap" justify="space-around">
                    <Avatar name={repo.name} />
                    <Title order={3} fz={18} fw={"normal"}>
                        {repo.name}
                    </Title>
                </Group>

                <Text
                    component={ScrollArea}
                    mah={50}
                    style={{
                        flex: 1,
                    }}
                >
                    {repo.description || "No Available Description."}
                </Text>

                <Badge>{repo.language}</Badge>
            </Stack>
        </Card>
    );
}

// The GitHubRepoCard component accepts a repo object and renders its details.
const GitHubRepoCard = ({ repo }: { repo: RepositoryType }) => {
    return (
        <Card
            mah={{ base: 150, sm: 200, md: 300, lg: 400 }}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
        >
            {/* Header with full name and primary language badge */}
            <Group justify="space-between" style={{ marginBottom: 10 }}>
                <Text fw={500} size="lg">
                    {repo.full_name || "Repository Name"}
                </Text>
                {repo.language && (
                    <Badge color="pink" variant="light">
                        {repo.language}
                    </Badge>
                )}
            </Group>

            {/* Repository description */}
            <Text size="sm" c="dimmed" style={{ marginBottom: 15 }}>
                {repo.description || "No description provided."}
            </Text>

            {/* Topics badges */}
            <Group gap={5} mb="md">
                {repo.topics &&
                    repo.topics.length > 0 &&
                    repo.topics.map((topic) => (
                        <Badge key={topic} color="blue" variant="light">
                            {topic}
                        </Badge>
                    ))}
            </Group>

            {/* Action buttons for GitHub and deploy link */}
            <Group>
                <Button
                    component="a"
                    href={repo.html_url}
                    target="_blank"
                    variant="light"
                    color="blue"
                    fullWidth
                >
                    GitHub
                </Button>
                {repo.deployments_url && (
                    <Button
                        component="a"
                        href={repo.deployments_url}
                        target="_blank"
                        variant="light"
                        color="green"
                        fullWidth
                    >
                        Live Demo
                    </Button>
                )}
            </Group>
        </Card>
    );
};
