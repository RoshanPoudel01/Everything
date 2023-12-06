import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "../../Helper/NavLink";

interface navitem {
  id: number;
  name: string;
  link: string;
}

const navItems: navitem[] = [
  {
    id: 1,
    name: "Home",
    link: NavLink?.FirstPage,
  },
  {
    id: 2,
    name: "Products",
    link: NavLink?.Products,
  },
  {
    id: 3,
    name: "Category",
    link: "#",
  },
];
const NavItems = () => {
  return (
    <Box
      display={{ base: "flex", sm: "flex", md: "inline-flex" }}
      alignItems={"center"}
      gap={"148px"}
    >
      <Flex
        direction={{ base: "column", sm: "column", md: "row" }}
        alignItems={"flex-start"}
        gap={"48px"}
      >
        {navItems.map((item: navitem) => (
          <Box
            as="a"
            px={2}
            py={1}
            rounded={"md"}
            href={item.link}
            key={item.id}
            _hover={{
              textDecoration: "none",
              bg: "RGBA(0, 0, 0, 0.04)",
            }}
            cursor={"pointer"}
          >
            {item.name}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default NavItems;
