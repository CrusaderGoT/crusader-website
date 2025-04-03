"use client";

import Naluka from "@/fonts/NalukaFont";
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
    MantineColor,
    ScrollArea,
    ScrollAreaAutosize,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    Icon,
    IconBrandCss3,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandPython,
    IconBrandTypescript,
    IconCode,
} from "@tabler/icons-react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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
    
    const created_at = dayjs(repo.created_at).fromNow();
    const updated_at = dayjs(repo.updated_at).fromNow();

    const repoName = repo.name.split("-").join(" ");

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
                            {repo.homepage.includes("crusadergot")
                                ? "You are Here"
                                : "Website"}
                        </Anchor>
                    )}
                </Group>
                <Divider mb="xs" />
            </Card.Section>

            <Card.Section mx="auto" my="auto" mih={20} mah={20}>
                <Group wrap="nowrap" align="center">
                    <Avatar size="sm" name={repoName} />
                    <Title
                        textWrap="pretty"
                        order={4}
                        fw="normal"
                        ff={`${Naluka.style.fontFamily}`}
                    >
                        {repoName}
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

            <Card.Section
                component={ScrollArea}
                offsetScrollbars
                flex={1}
                mih={70}
            >
                <Box p="xs">
                    <Text>
                        {repo.description ?? "No Available Description"}
                    </Text>
                </Box>
            </Card.Section>

            <Card.Section>
                <Divider mb="xs" />
            </Card.Section>

            <Card.Section
                component={ScrollAreaAutosize}
                offsetScrollbars
                mah={60}
            >
                <Group>
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
                        ? (() => {
                              const total = Object.values(langs).reduce(
                                  (acc, cur) => acc + cur,
                                  0
                              );

                              return Object.entries(langs).map(
                                  ([language, value]) => {
                                      const langKey = language.toLowerCase();
                                      const [LanguageIcon, color] = colorIcon[
                                          langKey
                                      ] ?? [IconCode, "gold"];
                                      const langPercent = Math.round(
                                          (value / total) * 100
                                      );

                                      return (
                                          <Badge
                                              key={language}
                                              color={color}
                                              leftSection={
                                                  <LanguageIcon size={14} />
                                              }
                                              rightSection={
                                                  langPercent > 1
                                                      ? `${langPercent}%`
                                                      : null
                                              }
                                              variant="filled"
                                              size="sm"
                                              fw={"bold"}
                                              autoContrast
                                          >
                                              {language}
                                          </Badge>
                                      );
                                  }
                              );
                          })()
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

type colorIconType = {
    [key: string]: [Icon, MantineColor];
};

const colorIcon: colorIconType = {
    python: [IconBrandPython, "blue"],
    javascript: [IconBrandJavascript, "yellow.4"],
    css: [IconBrandCss3, "blue.4"],
    html: [IconBrandHtml5, "orange"],
    typescript: [IconBrandTypescript, "cyan"],
};
