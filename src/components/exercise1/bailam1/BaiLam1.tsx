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
import { ex1 } from "../../../assets/index";
export default function BaiLam1() {
  return (
    <>
      <Flex align="center" justify="center" direction="column" mt={24}>
        <Card w={350} shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              h={160}
              style={{
                overflow: "hidden",
              }}
              src={ex1}
            />
          </Card.Section>
          <Group position="apart">
            <Text mt="md" mb={10} fw={500}>
              Son Doong Adventures
            </Text>
            <Badge color="green.2" variant="light">
              FEATURED
            </Badge>
          </Group>
          <Text color="dimmed" size="sm" mb={17}>
            With Son Doong Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the Son Doong
            cave of Vietnam
          </Text>
          <Button
            variant="light"
            color="orange.2"
            fullWidth
            mt="md"
            radius="md"
          >
            Book classic tour now
          </Button>
        </Card>
      </Flex>
    </>
  );
}
