import { useQuery } from "@tanstack/react-query";
import apiCall from "../../Helper/Axios";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const SideItem = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Box maxWidth={"fit-content"} display={"flex"}>
          {isOpen ? (
            <Box pb={4} display={{ md: "flex" }} bgColor={"antiquewhite"}>
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
                    <Text fontSize={12} key={item}>
                      {item.toUpperCase()}
                    </Text>
                  ))}
              </Flex>
            </Box>
          ) : (
            <Box
              pb={4}
              display={{ base: "none", sm: "none", md: "flex" }}
              bgColor={"antiquewhite"}
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
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none", xl: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box ml={{ base: 5, md: 55, sm: 5, xl: 55 }}>{children}</Box>
        </Box>
      )}
    </>
  );
};

export default SideItem;
