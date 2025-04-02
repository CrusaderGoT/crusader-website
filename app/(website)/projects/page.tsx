import { Projects } from "@/components/ui/Projects";
import { RefreshButton } from "@/components/buttons/RefreshButton";

import { getRepoLanguages, getRepositories } from "@/lib/githubSDK";

import { Center, Image, SimpleGrid, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GitHub Projects",
    description: "A list of my public repositories on GitHub",
};


export default async function ProjectPage() {
    const { repos } = await getRepositories();

    if (!repos) {
        return (
            <Center h={"80vh"}>
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
                        <RefreshButton
                            displayName="Refresh Page"
                            variant="outline"
                            size="md"
                            mt="xl"
                        />
                    </div>
                    <Image src="/404.svg" hiddenFrom="xs" />
                </SimpleGrid>
            </Center>
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
