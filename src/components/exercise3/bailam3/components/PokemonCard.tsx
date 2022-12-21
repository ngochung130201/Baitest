import { PokemonData } from "../data/pokemon.data";
import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  HoverCard,
  Image,
  Text,
} from "@mantine/core";
import "./style.css";
import { useClipboard } from "@mantine/hooks";
export default function PokemonCard({ pokemon }: { pokemon: PokemonData }) {
  //Làm Bài Tại Đây
  const clipboard = useClipboard({ timeout: 500 });
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section component="a">
          <div className="custom_css">
            <Image src={pokemon.image} height={300} alt="Norway" />
          </div>
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{pokemon.name}</Text>
        </Group>

        <Text size="sm" color="dimmed" mb={16}>
          {pokemon.description}
        </Text>

        <Button
          radius={8}
          variant="light"
          fullWidth
          color={clipboard.copied ? "green" : "orange.2"}
          onClick={() => clipboard.copy("Huynh Ngoc Hung")}
        >
          {clipboard.copied ? "Copied" : "Copy Pokemon Description"}
        </Button>
      </Card>
    </>
  );
}
