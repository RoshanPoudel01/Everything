import { Button, HStack } from "@chakra-ui/react";
import apiCall from "../Helper/Axios";

const Pagination = () => {
  const getProducts = async () => {
    const products = await apiCall.get("products?limit=10&skip=10");
    console.log(products);
  };
  const nextPage = () => {
    getProducts();
  };
  return (
    <>
      <HStack>
        <Button>Previous</Button>
        <Button onClick={nextPage}>Next</Button>
      </HStack>
    </>
  );
};

export default Pagination;
