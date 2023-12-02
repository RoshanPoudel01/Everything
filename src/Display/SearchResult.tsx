import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiCall from "../Helper/Axios";
import { item } from "../Interface/Item";
import { AbsoluteCenter, Box, Center, Spinner } from "@chakra-ui/react";
import ItemCard from "../Components/ItemCard";
import SearchBar from "../Components/SearchBar";
const SearchResult = () => {
  const [searchParam] = useSearchParams();

  const title = searchParam.get("title");
  const getSearchedProducts = async () => {
    // console.log(title);
    const product = await apiCall.get(`products/search?q=${title}`);
    const searchedValue = product?.data?.products;
    console.log(searchedValue);
    return searchedValue;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", title],
    queryFn: getSearchedProducts,
  });
  if (error) {
    console.log(error.message);
  }
  // console.log(data);
  return (
    <>
      <SearchBar />
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
        <Box p={4} gap={4}>
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
