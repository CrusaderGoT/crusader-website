"use client";

import {
    Container,
    Divider,
    Group,
    Stack,
    Text,
    ThemeIcon,
    Transition,
    type MantineColor,
    type MantineGradient,
    type MantineRadius,
    type MantineSize,
} from "@mantine/core";

import {
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandDjango,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMantine,
    IconBrandNextjs,
    IconBrandPython,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandTypescript,
    IconTool,
    type Icon,
} from "@tabler/icons-react";

export function Services() {
    return (
        <Container>
            <Stack>
                <TechSlides />
                <Divider
                    label={
                        <>
                            <IconTool size={17} color="gold" />
                            <Text ml={5} fz={17} c={"gold"}>
                                Services
                            </Text>
                        </>
                    }
                    size={"md"}
                />
            </Stack>
        </Container>
    );
}

type TechProp = {
    icon: Icon;
    variant: string;
    color?: MantineColor;
    gradient?: MantineGradient;
    size?: MantineSize | number;
    radius?: MantineRadius;
    autoContrast?: boolean;
    c?: MantineColor;
};

const techs: TechProp[] = [
    {
        icon: IconBrandDjango,
        variant: "filled",
        color: "green",
    },
    {
        icon: IconBrandPython,
        variant: "gradient",
        gradient: {
            from: "blue",
            to: "yellow",
            deg: 45,
        },
    },
    {
        icon: IconBrandTypescript,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandReact,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandMantine,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandNextjs,
        variant: "outline",
        color: "black",
        c: "white",
    },
    {
        icon: IconBrandJavascript,
        variant: "filled",
        color: "yellow",
    },
    {
        icon: IconBrandHtml5,
        variant: "filled",
        color: "orange",
    },
    {
        icon: IconBrandCss3,
        variant: "filled",
        color: "blue",
    },
    {
        icon: IconBrandTailwind,
        variant: "subtle",
        color: "blue",
        c: "blue",
    },
    {
        icon: IconBrandBootstrap,
        variant: "light",
        color: "blue",
    },
];

function TechSlides() {
    return (
        <Stack h={"20vh"}>
            {Array.from({ length: 3 }).map((_, ind) => (
                <Transition
                    mounted={true}
                    keepMounted
                    transition={"slide-left"}
                    duration={Infinity}
                    key={ind}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <Group
                            grow
                            wrap="nowrap"
                            gap={"xs"}
                            style={{
                                ...styles,
                                overflow: "hidden",
                                height: "100%",
                            }}
                        >
                            {techs.map((tech, inx) => {
                                const Icon = tech.icon;
                                tech.size = tech.size || "md";
                                tech.radius = tech.radius || "md";
                                tech.autoContrast = tech.autoContrast || true;
                                tech.c = tech.c || "black";

                                return (
                                    <ThemeIcon
                                        key={`${inx}-${ind}`}
                                        style={{ ...styles }}
                                        variant={tech.variant}
                                        color={tech.color}
                                        gradient={tech.gradient}
                                        size={tech.size}
                                        radius={tech.radius}
                                        autoContrast={tech.autoContrast}
                                        c={tech.c}
                                    >
                                        <Icon />
                                    </ThemeIcon>
                                );
                            })}
                        </Group>
                    )}
                </Transition>
            ))}
        </Stack>
    );
}
