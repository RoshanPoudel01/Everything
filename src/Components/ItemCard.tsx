import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
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
          <Card bgColor={"#F5F5F5"} width={"auto"}>
            <CardBody
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"16px"}
              overflow="hidden"
            >
              <Box
                width={"auto"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"180px"}
                p={[4, 6]}
                borderRadius={"4px"}
              >
                <Image
                  // objectFit="cover"
                  src={thumbnail}
                  height={{ base: "50%", sm: "70%", md: "80%", lg: "100%" }}
                  width={{ base: "50%", sm: "70%", md: "80%", lg: "100%" }}
                  alt={title}
                  // flexShrink={0}
                />
              </Box>
              <Stack mt="6" spacing="3">
                <Text height={"30px"} fontWeight={"bold"} overflow={"hidden"}>
                  {title}
                </Text>

                <Text
                  color="blue.600"
                  fontSize={{ base: 12, sm: 14, md: 14, lg: 16 }}
                >
                  ${price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  fontSize={{ base: "10", sm: "12", md: "14", lg: "16" }}
                  width={"auto"}
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleClick(title)}
                >
                  View More
                </Button>
                <Button
                  variant="solid"
                  width={"auto"}
                  fontSize={{ base: "10", sm: "12", md: "14", lg: "16" }}
                  color="#2D3748"
                >
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
            width={{ base: "5%", sm: "200px", md: "250px", lg: "20%" }}
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
