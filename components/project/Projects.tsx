import { repos } from "@/lib/githubSDK";

import { SimpleGrid, Container } from "@mantine/core";
import { RepoCard } from "@/components/project/RepoCard";

export function Projects() {
    return (
        <Container size={"xl"}>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
                {repos.data.map((repo) => {
                    return <RepoCard key={repo.id} repo={repo} />;
                })}
            </SimpleGrid>
        </Container>
    );
}
