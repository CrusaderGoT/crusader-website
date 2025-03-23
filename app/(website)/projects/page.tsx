import { Projects } from "@/components/ui/Projects";

import { getRepoLanguages, getRepositories } from "@/lib/githubSDK";

import { Button, Image, SimpleGrid, Text, Title } from "@mantine/core";

export default async function ProjectPage() {
    const { repos } = await getRepositories();

    if (!repos) {
        return (
            <SimpleGrid
                spacing={{ base: 40, sm: 80 }}
                cols={{ base: 1, sm: 2 }}
            >
                <Image src="/404.svg" visibleFrom="xs" />
                <div>
                    <Title c={"red"} fw={900}>
                        Something is not right...
                    </Title>
                    <Text c="dimmed" size="lg">
                        Make Sure Your Internet Connection Is Good.
                    </Text>
                    <Button variant="outline" size="md" mt="xl">
                        Get back to home page
                    </Button>
                </div>
                <Image src="/404.svg" hiddenFrom="xs" />
            </SimpleGrid>
        );
    }

    const repositoriesWithLanguages = await Promise.all(
        repos.map(async (repo) => {
            const { langs } = await getRepoLanguages({
                owner: repo.owner.login,
                repo: repo.name,
            });
            return { repo, langs };
        })
    );

    return <Projects repositoriesWithLanguages={repositoriesWithLanguages} />;
}
