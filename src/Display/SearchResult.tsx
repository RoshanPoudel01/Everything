import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiCall from "../Helper/Axios";
import { item } from "../Interface/Item";
import { AbsoluteCenter, Box, Center, Spinner } from "@chakra-ui/react";
import ItemCard from "../Components/ItemCard";

const SearchResult = () => {
  const [searchParam] = useSearchParams();

  const title = searchParam.get("title");
  const category = searchParam.get("category");
  const getSearchedProducts = async () => {
    // console.log(title);

    if (title) {
      const product = await apiCall.get(`products/search?q=${title}`);
      const searchedValue = product?.data?.products;
      // console.log(searchedValue);
      return searchedValue;
    } else {
      const productItem = await apiCall.get(`products/category/${category}`);

      // console.log(productItem?.data?.products);
      return productItem?.data?.products;
    }
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", title, category],
    queryFn: getSearchedProducts,
  });
  if (error) {
    console.log(error.message);
  }
  // console.log(data);
  return (
    <>
      {isLoading ? (
        <Box
          height={"100vh"}
          width={"200vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Box p={{ base: 0, sm: 0, md: 4, lg: 4 }} gap={4}>
          {data &&
            data?.map(({ thumbnail, title, price, description, id }: item) => (
              <ItemCard
                key={id}
                id={id}
                thumbnail={thumbnail}
                title={title}
                price={price}
                description={description}
              />
            ))}
          {!data?.length && (
            <AbsoluteCenter mt={8}>Search Result not found</AbsoluteCenter>
          )}
        </Box>
      )}
    </>
  );
};

export default SearchResult;
