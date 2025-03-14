"use client";

import { RepoCardProps } from "@/components/data/githubProjectTypes";

import { Card, Image, Text, Badge, Button, Group, ScrollArea } from '@mantine/core';

export function RepoCard({ repo }: RepoCardProps) {
  // The repo object should contain properties like:
  // name, description, language, stars, forks, owner, and ownerAvatar
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* Owner avatar */}
      {repo.owner.avatar_url && (
        <Card.Section>
          <Image src={repo.owner.avatar_url} height={160} alt={`${repo.owner} avatar`} />
        </Card.Section>
      )}
      
      {/* Repository name and primary language badge */}
      <Group justify="space-between" style={{ marginTop: 15, marginBottom: 5 }}>
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
        <Text size="sm" component={ScrollArea} h={"50"} style={{ lineHeight: 1.5, marginBottom: 15 }}>
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