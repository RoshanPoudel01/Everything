import { Box, Link, Text, HStack } from "@chakra-ui/react";
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
    <>
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
    </>
  );
};

export default NavItems;
