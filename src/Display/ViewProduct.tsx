import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Spinner,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";
import apiCall from "../Helper/Axios";
import { item } from "../Interface/Item";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useQuery } from "@tanstack/react-query";

const ViewProduct = () => {
  const [searchParams] = useSearchParams();
  const title: string | null = searchParams.get("title");
  //   console.log(title);

  const getProduct = async () => {
    const productItem = await apiCall.get(`products/search?q=${title}`);
    const displayProduct = productItem?.data?.products?.filter(
      (res: any) => res.title === title
    );
    console.log(displayProduct);
    return displayProduct;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });
  if (error) {
    console.log(error.message);
  }
  return (
    <>
      <SearchBar />
      <Box p={4}>
        <Card m={2} bgColor={"#E2E8F0"} p={2}>
          <CardBody>
            {isLoading ? (
              <Spinner />
            ) : (
              data?.map(
                ({
                  thumbnail,
                  category,
                  price,
                  description,
                  title,
                  id,
                  stock,
                }: item) => (
                  <Stack key={id}>
                    <Flex>
                      <Image boxSize={"400px"} width={"60%"} src={thumbnail} />
                      <Stack pl={8}>
                        <Text fontSize={"md"}>{category?.toUpperCase()}</Text>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                          {title}
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bold"}>
                          ${price}
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"light"}>
                          {description}
                        </Text>

                        <Badge
                          fontSize={"lg"}
                          colorScheme="blue"
                          rounded={"md"}
                          maxWidth={"220px"}
                        >
                          {" "}
                          {stock} Products in Stock
                        </Badge>
                        <Button
                          maxWidth={"100px"}
                          colorScheme="blue"
                          size={"lg"}
                        >
                          Buy
                        </Button>
                      </Stack>
                    </Flex>
                  </Stack>
                )
              )
            )}

            {/* <Grid templateColumns="repeat(2,1fr)">
            <Image boxSize={"500px"} src="https://bit.ly/sage-adebayo" />
            <Stack>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                Hello
              </Text>
              <Text fontSize={"lg"}>Hello There How are you</Text>
            </Stack>
          </Grid> */}
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default ViewProduct;
