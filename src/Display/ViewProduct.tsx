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
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  HStack,
} from "@chakra-ui/react";
import apiCall from "../Helper/Axios";
import { item } from "../Interface/Item";
import { useSearchParams } from "react-router-dom";

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
      <Box p={4} ml={4} maxWidth={{ base: "100%", md: "100%", sm: "100%" }}>
        <Card p={4}>
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
                    <Flex
                      direction={{ base: "column", sm: "column", md: "row" }}
                    >
                      <Box
                        width={"100%"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                      >
                        <Image
                          height={{ base: "auto", md: "315px" }}
                          width={{
                            base: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "70%",
                          }}
                          src={thumbnail}
                        />
                      </Box>
                      <Stack pl={{ base: 0, md: 8 }}>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                          {category?.toUpperCase()}
                        </Text>
                        <Text
                          fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                            xl: "lg",
                          }}
                          fontWeight={"bold"}
                        >
                          {title}
                        </Text>
                        <Text
                          fontSize={{
                            base: "sm",
                            sm: "md",
                            md: "md",
                            xl: "lg",
                          }}
                          fontWeight={"bold"}
                          color={"blue.600"}
                        >
                          ${price}
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"light"}>
                          {description}
                        </Text>

                        <Badge
                          fontSize={{ base: "sm", md: "lg" }}
                          colorScheme="blue"
                          rounded={"md"}
                          variant="solid"
                          maxWidth={"fit-content"}
                        >
                          {stock} in Stock
                        </Badge>
                        <HStack>
                          <NumberInput
                            size="sm"
                            maxW={20}
                            defaultValue={1}
                            min={0}
                            max={stock}
                          >
                            <NumberInputField />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                          <Button
                            maxWidth={"100px"}
                            colorScheme="blue"
                            size={"lg"}
                          >
                            Buy
                          </Button>
                        </HStack>
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
