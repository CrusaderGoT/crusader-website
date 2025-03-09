import {
    BackgroundImage,
    Container,
    Highlight,
    Paper,
    ScrollArea
} from "@mantine/core";

const aboutText = `
    👋 Hi, I’m @CrusaderGoT\n

    👤 Real Name: Emeka ~ ay-may-kah
    👀 I’m passionate about Python, especially with FastAPI and Django for web development. I follow best practices and enjoy working with a variety of libraries and technologies, including:

    🔢 Numpy and Scipy for scientific computing,
    📊 Matplotlib for data visualization,
    🖼️ Pillow (PIL) for image processing,
    🎶 Librosa for audio and music analysis,
    🎥 Moviepy for video editing,
    💻 HTML, CSS, and TailwindCSS for frontend development,
    🅱️ Bootstrap5, ShadCN UI, and Mantine for responsive and modern UI design.
    🌱 Currently, I'm focusing on:

    Expanding my expertise in JavaScript, Next.js, and modern web development tools,
    Building RESTful APIs with FastAPI and Django REST framework,
    Improving database management skills with PostgreSQL, Neon, and Aiven,
    Deploying applications using platforms like Render.
    💡 Recent projects include:

    An API for The Culling Games, leveraging FastAPI and Next.js,
    Dynamic portfolio websites to showcase skills and services,
    Systems utilizing Alembic for database migrations and SQLAlchemy/SQLModel for ORM.
    🔭 Future goals:

    Dive deeper into cloud technologies like AWS,
    Explore containerization with Docker,
    Enhance my knowledge in AI and machine learning,
    Expand into automation and scripting to solve real-world problems.
    📫 You can reach me at enememeka44@gmail.com or connect with me on LinkedIn and Twitter.

    Let’s collaborate and build something amazing together!
`;

export function About() {
    return (
        <Container size={"xl"}>
            <Paper
                component={ScrollArea}
                h={"90vh"}
                offsetScrollbars
                withBorder
            >
                <BackgroundImage src="/images/aboutBG.jpg" h={"100%"}>
                    <Highlight
                        size="lg"
                        ta={"center"}
                        p={"md"}
                        lh={"xl"}
                        lts={1.5}
                        highlight={[
                            "Emeka",
                            "Python",
                            "FastAPI",
                            "html",
                            "css",
                            "tailwind",
                            "enememeka44@gmail.com",
                        ]}
                        highlightStyles={{
                            backgroundImage:
                                "linear-gradient(90deg, var(--mantine-color-red-6), var(--mantine-color-gold-8))",
                            fontSize: "1.2rem",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        {aboutText}
                    </Highlight>
                </BackgroundImage>
            </Paper>
        </Container>
    );
}
