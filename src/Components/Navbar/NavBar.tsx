import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavItems from "./NavItems";

import SearchBar from "../SearchBar";

const NavBar: any = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minWidth={{ base: "100%" }}>
      <Box
        bgColor={"black"}
        height={"30px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"white"}>E-Commerce</Text>
      </Box>
      <Box as="nav" bg={"#F7FAFC "} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src="https://bit.ly/sage-adebayo" boxSize="50px" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavItems />
            </HStack>
          </HStack>
          <SearchBar />
          <Popover returnFocusOnClose={false} closeOnBlur={false}>
            <PopoverTrigger>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </PopoverTrigger>

            <PopoverContent>
              <PopoverBody>
                {isOpen ? (
                  <Box pb={4} display={{ md: "none" }}>
                    <Stack as={"nav"} spacing={4}>
                      <NavItems />
                    </Stack>
                  </Box>
                ) : null}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
      <Box p={4} display={"flex"} height={"100%"}>
        {children}
      </Box>
    </Box>
  );
};

export default NavBar;
