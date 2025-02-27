import { ModeToggleButton } from "@/ui/ModeToggle";
import { Text, Title, Button, Box } from "@mantine/core";

export default function Home() {
    return (
        <>
            <Button variant="gradient">theme</Button>
            <Box bg="gold" c="white" m="md" p={"sm"} fw={700}>
                This box has virtual background color, it is pink in dark mode
                and cyan in light mode
            </Box>
            <ModeToggleButton />{" "}
            <Title order={3} fw={400} size={40} fs={"italic"}>
                h4pp
            </Title>{" "}
            <Text>kkkk</Text>
        </>
    );
}
