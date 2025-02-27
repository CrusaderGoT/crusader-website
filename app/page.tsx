import { ModeToggleButton } from "@/ui/ModeToggle";
import { Text, Title, Button, Box } from "@mantine/core";

export default function Home() {
    return (
        <>
            <Button variant="outline">theme</Button>
            <Box bg="gold" c="black" m="md" p={"sm"} fw={700}>
                This box has virtual background color, it is pink in dark mode
                and cyan in light mode
            </Box>
            <ModeToggleButton />{" "}
            <Title order={1} fw={400} fs={"italic"}>
                CrusaderGoT
            </Title>{" "}
            <Text>kkkk</Text>
        </>
    );
}
