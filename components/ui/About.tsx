import {
    Highlight,
    Image as MantineImage,
    Paper,
    ScrollArea,
    Stack,
    Title,
} from "@mantine/core";

import Image from "next/image";

import { aboutMe, myAge } from "@/components/data/aboutData";
import Naluka from "@/fonts/NalukaFont";

export function About() {
    const { years, months, days } = myAge();

    return (
        <Stack align="center">
            <Title order={2} fw={"bold"} ff={`${Naluka.style.fontFamily}`}>
                A little story about myself...
            </Title>
            <Paper component={ScrollArea} h={"80vh"} withBorder>
                <Highlight
                    size="lg"
                    ta={"center"}
                    p={"md"}
                    lh={"xl"}
                    lts={1.5}
                    c={"gold"}
                    fw={"bold"}
                    highlight={[
                        "enememeka44@gmail.com",
                        "Enemchukwu Chukwuemeka Alexander Afamefuna",
                        "August 29th, 1999",
                        years.toLocaleString(),
                        months.toLocaleString(),
                        days.toLocaleString(),
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
                <MantineImage
                    component={Image}
                    src={"/images/nav_pimg.jpg"}
                    alt="My Dope Picture"
                    width={480}
                    height={636}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Paper>
        </Stack>
    );
}
