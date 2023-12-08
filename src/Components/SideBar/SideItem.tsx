import { useQuery } from "@tanstack/react-query";
import apiCall from "../../Helper/Axios";
import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate, useSearchParams } from "react-router-dom";

const SideItem = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    // console.log(item, "clicked categ");

    setSearchParams({ category: item });
    navigate(`/search?category=${item}`);
  };
  const getCategories: any = async () => {
    const categories = await apiCall.get("products/categories");
    return categories?.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["categorie"],
    queryFn: getCategories,
  });
  if (error) {
    console.log(error.message, "categoryerror");
  }

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <Box
            maxWidth={"fit-content"}
            overflow={"auto"}
            display={"flex"}
            flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
          >
            <Popover returnFocusOnClose={false} closeOnBlur={false}>
              <PopoverTrigger>
                <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none", xl: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </PopoverTrigger>
              {isOpen ? (
                <PopoverContent>
                  <PopoverBody>
                    <Box
                      overflow={"auto"}
                      pb={4}
                      display={{ md: "flex" }}
                      bgColor="#F5F5F5"
                    >
                      <Flex
                        direction={"column"}
                        rounded="lg"
                        alignItems={"flex-start"}
                        pl={1}
                        pt={8}
                        gap={"16px"}
                      >
                        <Text>Categories:</Text>
                        {Array.isArray(data) &&
                          data?.map((item: string) => (
                            <Box
                              as="a"
                              px={2}
                              py={1}
                              rounded={"md"}
                              fontSize={10}
                              // href={item.link}
                              key={item}
                              onClick={() => handleClick(item)}
                              _hover={{
                                textDecoration: "none",
                                bg: "RGBA(0, 0, 0, 0.04)",
                              }}
                              cursor={"pointer"}
                            >
                              {item.toUpperCase()}
                            </Box>
                          ))}
                      </Flex>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              ) : (
                <Box
                  overflow={"auto"}
                  pb={4}
                  display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
                  bgColor="#F5F5F5"
                  maxH={"fit-content"}
                >
                  <Flex
                    direction={"column"}
                    rounded="lg"
                    alignItems={"flex-start"}
                    width={"200px"}
                    pl={1}
                    pt={8}
                    gap={"16px"}
                  >
                    <Text>Categories:</Text>
                    {Array.isArray(data) &&
                      data?.map((item: string) => (
                        <Box
                          as="a"
                          px={2}
                          py={1}
                          rounded={"md"}
                          onClick={() => handleClick(item)}
                          fontSize={12}
                          // href={item.link}
                          key={item}
                          _hover={{
                            textDecoration: "none",
                            bg: "RGBA(0, 0, 0, 0.04)",
                          }}
                          cursor={"pointer"}
                        >
                          {item.toUpperCase()}
                        </Box>
                      ))}
                  </Flex>
                </Box>
              )}
            </Popover>
            <Box ml={{ base: 5, md: 45, sm: 5, xl: 45 }}>{children}</Box>
          </Box>
        </>
      )}
    </>
  );
};

export default SideItem;
