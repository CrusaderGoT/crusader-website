import { SimpleGrid, Skeleton, Box, Center } from "@mantine/core";

export default function Loading() {
    // Array length controls number of skeleton cards
    const placeholderCount = 8;

    return (
        <Center style={{ minHeight: "60vh" }}>
            <Box p="md" style={{ width: "100%", maxWidth: 1200 }}>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                    spacing="sm"
                    verticalSpacing="sm"
                >
                    {Array.from({ length: placeholderCount }).map((_, idx) => (
                        <Box
                            key={idx}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <Skeleton height={160} radius="md" mb="sm" />
                            <Skeleton
                                height={20}
                                width="80%"
                                radius="xl"
                                mb="xs"
                            />
                            <Skeleton height={14} width="60%" radius="xl" />
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Center>
    );
}
