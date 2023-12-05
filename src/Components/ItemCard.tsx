import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { item } from "../Interface/Item";
const ItemCard = ({
  thumbnail,
  title,
  price,
  description,
  id,
  isGrid,
}: item) => {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = (title: string) => {
    setSearchParams({ title: title });
    navigate(`/viewproduct?title=${title}`);
  };
  return (
    <>
      {isGrid ? (
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={thumbnail}
                height={"200px"}
                alt={title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" height={"50px"} overflow={"hidden"}>
                  {title}
                </Heading>

                <Text color="blue.600" fontSize="2xl">
                  ${price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleClick(title)}
                >
                  View More
                </Button>
                <Button variant="solid" color="#2D3748">
                  Buy
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      ) : (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mt={2}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={thumbnail}
            alt={title}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{title}</Heading>
              <Text py="2">{description}</Text>
              <Text py="2">${price}</Text>
              <Text>Product No.{id}</Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                onClick={() => handleClick(title)}
                colorScheme="blue"
              >
                View More
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      )}
    </>
  );
};

export default ItemCard;
