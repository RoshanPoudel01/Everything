import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSearchParams, useNavigate } from "react-router-dom";
export interface item {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const ItemCard = ({ thumbnail, title, price, description }: item) => {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = (title: string) => {
    setSearchParams({ title: title });
    navigate(`/viewproduct?title=${encodeURIComponent(title)}`);
  };
  return (
    <Card
      data-type="Card"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt={2}
    >
      <Image
        data-type="Image"
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={thumbnail}
        alt={title}
      />

      <Stack data-type="Stack">
        <CardBody data-type="CardBody">
          <Heading data-type="Heading" size="md">
            {title}
          </Heading>

          <Text data-type="Text" py="2">
            {description}
          </Text>
          <Text data-type="Text" py="2">
            ${price}
          </Text>
        </CardBody>

        <CardFooter data-type="CardFooter">
          <Button
            data-type="Button"
            variant="solid"
            onClick={() => handleClick(title)}
            colorScheme="blue"
          >
            View More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ItemCard;
