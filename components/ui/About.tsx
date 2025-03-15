import {
    BackgroundImage,
    Highlight,
    Paper,
    ScrollArea,
    Stack,
    Title,
} from "@mantine/core";

import { aboutMe, myAge } from "@/components/data/aboutData";

export function About() {
    const age = myAge().toLocaleString();

    return (
        <Stack align="center">
            <Title order={2} fw={"normal"}>
                A little story about myself...
            </Title>
            <Paper
                component={ScrollArea}
                h={"80vh"}
                offsetScrollbars
                withBorder
            >
                <BackgroundImage src="/image/aboutBG.jpg" h={"100%"}>
                    <Highlight
                        size="lg"
                        ta={"center"}
                        p={"md"}
                        lh={"xl"}
                        lts={1.5}
                        c={"gold"}
                        highlight={[
                            "enememeka44@gmail.com",
                            "Enemchukwu Chukwuemeka Alexander Afamefuna",
                            "August 28th, 1999",
                            age,
                            "Python",
                            "FastAPI",
                            "Django",
                            "Django REST framework",
                            "RESTful APIs",
                            "Numpy",
                            "Scipy",
                            "Matplotlib",
                            "Pillow",
                            "Librosa",
                            "Moviepy",
                            "HTML",
                            "CSS",
                            "TailwindCSS",
                            "Bootstrap5",
                            "ShadCN UI",
                            "Mantine",
                            "JavaScript",
                            "Next.js",
                            "Alembic",
                            "SQLAlchemy/SQLModel",
                            "AWS",
                            "Docker",
                            "AI,",
                            "machine learning",
                            "programming journey",
                            "tech vagabond",
                            "legacy",
                            "John Duke",
                            "anime",
                            "stories",
                            "Information Management Technology (IMT)",
                            "civil engineering",
                        ]}
                        highlightStyles={{
                            backgroundImage:
                                "linear-gradient(90deg, var(--mantine-color-red-8), var(--mantine-color-red-6))",
                            fontSize: "1.2rem",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {aboutMe}
                    </Highlight>
                </BackgroundImage>
            </Paper>
        </Stack>
    );
}
