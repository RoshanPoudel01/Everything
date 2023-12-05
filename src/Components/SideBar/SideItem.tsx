import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import apiCall from "../../Helper/Axios";
import { Box, Text } from "@chakra-ui/react";
// import SearchBar from "../SearchBar";

const SideItem = () => {
  const getCategories: any = async () => {
    const categories = await apiCall.get("products/categories");
    return categories?.data;
    // setCategory(categories?.data);
  };
  //   useEffect(() => {
  //     getCategories();
  //   }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["categorie"],
    queryFn: getCategories,
  });
  console.log(data);
  return (
    <>
      {/* <SearchBar /> */}
      <Box>
        <Text>asd</Text>
        {/* {data?.map((item: any) => (
          <li key={item}>{item}</li>
        ))} */}
      </Box>
    </>
  );
};

export default SideItem;
