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
import { item } from "../Interface/Item";
const ItemCard = ({ thumbnail, title, price, description, id }: item) => {
  const [searchParam, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = (title: string) => {
    setSearchParams({ title: title });
    navigate(`/viewproduct?title=${title}`);
  };
  return (
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
  );
};

export default ItemCard;
