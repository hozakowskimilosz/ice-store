import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export default function Product({ item }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.item_name}</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, aut. Illum rem, quia vero blanditiis natus optio at,
            libero aliquid quod voluptates exercitationem quae iste. Reiciendis
            quas nihil cum earum!
          </Text>
          <Text color="blue.500" fontSize="2xl">
            <span className="font-bold">{item.price} zł</span>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            View
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
