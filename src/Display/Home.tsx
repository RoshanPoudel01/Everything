import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import apiCall from "../Helper/Axios";
import { useQuery } from "@tanstack/react-query";
import ItemCard from "../Components/ItemCard";
import { item } from "../Interface/Item";
import Pagination from "../Components/Pagination";

const Home = () => {
  const getAllProducts = async () => {
    const productItems = await apiCall.get("products");

    return productItems?.data?.products;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  //   const findLargest = () => {
  //     // console.log(data);
  //     const price = data?.map(({ price }: item) => price);
  //     const sortedPrice = price?.sort((a: number, b: number) => a - b);
  //     // console.log(sortedPrice);
  //     if (sortedPrice?.length) {
  //       console.log(sortedPrice[0]);
  //       console.log(sortedPrice[sortedPrice?.length - 1]);
  //     }
  //   };
  //   findLargest();
  return (
    <>
      {/* <RangeSlider min={0} max={2000} step={100} /> */}
      <Card>
        <CardHeader>
          {isLoading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
            <CardBody>
              <SimpleGrid columns={{ base: 1, xl: 3, md: 2, sm: 1 }} gap={8}>
                {/* {data?.map(
                  ({ id, thumbnail, title, price, description }: item) => (
                    <ItemCard
                      isGrid
                      key={id}
                      id={id}
                      thumbnail={thumbnail}
                      title={title}
                      price={price}
                      description={description}
                    />
                  )
                )} */}
                <ItemCard
                  isGrid
                  // key={id}
                  id={1}
                  thumbnail={
                    "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg"
                  }
                  title={"Peacock"}
                  price={10000}
                  description={"description"}
                />
              </SimpleGrid>
            </CardBody>
          )}
        </CardHeader>
        <CardFooter>
          <Pagination />
        </CardFooter>
      </Card>
    </>
  );
};

export default Home;
