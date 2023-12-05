import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import apiCall from "../Helper/Axios";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ItemCard from "../Components/ItemCard";
import { item } from "../Interface/Item";
import SearchBar from "../Components/SearchBar";
import RangeSlider from "../Components/Range";
import SideItem from "../Components/SideBar/SideItem";
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
      <SideItem />
      <SearchBar />
      <RangeSlider min={0} max={2000} step={100} />
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
              <SimpleGrid columns={{ xl: 3, md: 2, sm: 1 }} gap={2}>
                {data?.map(
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
                )}
              </SimpleGrid>
            </CardBody>
          )}
        </CardHeader>
      </Card>
    </>
  );
};

export default Home;
