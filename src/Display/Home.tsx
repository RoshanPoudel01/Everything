import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import "../Display/page.css";
import apiCall from "../Helper/Axios";
import { useQuery } from "@tanstack/react-query";
import ItemCard from "../Components/ItemCard";
import { item } from "../Interface/Item";

import { useState } from "react";
import ReactPaginate from "react-paginate";

const Home = () => {
  // const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const getAllProducts = async () => {
    // console.log(currentPage, "current");
    // console.log(postsPerPage, "posts");
    const productItems = await apiCall.get(
      `products?skip=${currentPage * postsPerPage - postsPerPage}`
    );

    return productItems?.data?.products;
    {
    }
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts", currentPage, postsPerPage],
    queryFn: getAllProducts,
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let post = [];
  if (Array.isArray(data)) {
    post = data;
  } else {
    post = [];
  }
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts, "currentposts");

  const paginate = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      {/* <RangeSlider min={0} max={2000} step={100} /> */}

      {isLoading ? (
        <Center height={"100vh"} width={"150vh"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <>
          <SimpleGrid columns={{ base: 1, xl: 4, md: 3, sm: 2 }} gap={8}>
            {currentPosts?.map(
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
            {/* <ItemCard
                  isGrid
                  // key={id}
                  id={1}
                  thumbnail={
                    "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg"
                  }
                  title={"Peacock"}
                  price={10000}
                  description={"description"}
                /> */}
          </SimpleGrid>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={Math.ceil(post?.length / postsPerPage)}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName={"pagination"}
            pageLinkClassName={"page-number"}
            previousLinkClassName={"page-prev"}
            nextLinkClassName={"page-next"}
            activeLinkClassName={"active"}
          />
        </>
      )}
    </>
  );
};

export default Home;
