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
} from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useQuery } from "@tanstack/react-query";

const ViewProduct = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  //   console.log(title);

  const getProduct = async () => {
    const productItem = await axios.get("https://dummyjson.com/products");
    const displayProduct = productItem?.data?.products?.filter(
      (res: any) => res.title === title
    );
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
    <Box bg={"whiteAlpha"} p={4}>
      <SearchBar />
      <Card m={2} p={2}>
        <CardBody>
          {isLoading ? (
            <Spinner />
          ) : (
            data?.map((item: any) => (
              <Stack key={item.id}>
                <Text fontSize={"lg"} mb={2} fontWeight={"bold"}>
                  {item.title}
                </Text>
                <Flex>
                  <Image boxSize={"400px"} src={item.thumbnail} />
                  <Stack pl={2}>
                    <Text fontSize={"lg"}>Category: {item.category}</Text>
                    <Text fontSize={"lg"}>Brand: {item.brand}</Text>
                    <Text fontSize={"lg"}>{item.description}</Text>
                    <Text fontSize={"lg"} fontWeight={"bold"}>
                      ${item.price}
                    </Text>
                    <Text fontSize={"lg"}>Instock: {item.stock}</Text>
                    <Button maxWidth={"100px"} colorScheme="blue" size={"lg"}>
                      Buy
                    </Button>
                  </Stack>
                </Flex>
              </Stack>
            ))
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
  );
};

export default ViewProduct;
