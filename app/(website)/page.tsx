// Home Page. // Carousel
import { Text } from "@mantine/core";

export default function Home() {
    const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?';


    return (
        <>
            {Array(1)
          .fill(0)
          .map((_, index) => (
            <Text size="lg" key={index} my="md" maw={600} mx="auto">
              {lorem}
            </Text>
          ))}
        </>
    );
}
