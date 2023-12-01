import { useState } from "react";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Select,
  Spinner,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  InputGroup,
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";

import {
  createColumnHelper,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import ItemCard, { item } from "../Components/ItemCard";
type Product = {
  // brand: string;
  category: string;
  description: string;
  // discountPercentage: string;
  id: number;
  // images: string[] | string;
  price: number;
  title: string;
  stock: number;
  // rating: number;
  // thumbnail: string;
};
const columnHelper = createColumnHelper<Product>();
const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("title", {
    header: () => "Title",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: () => "Category",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("price", {
    header: () => "Price",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("stock", {
    header: () => "Stock",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];
const Products = () => {
  const [limit, setLimit] = useState(10);
  const getProducts = async () => {
    const productItems = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
    // console.log(productItems?.data?.products);
    return productItems?.data?.products;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", limit],
    queryFn: getProducts,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Box bg={"whiteAlpha"} p={4}>
      <SearchBar />
      <InputGroup mt={2}>
        <Text>Select Limit</Text>
        <Select
          placeholder="Select One"
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Select>
      </InputGroup>

      <Card>
        <CardHeader>
          <Text align={"center"}>Products List</Text>
        </CardHeader>
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
          <CardBody>
            {/* <Table>
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {table.getRowModel().rows.map((row) => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <Tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Tfoot>
            </Table> */}
            <Box>
              {data?.map((item: item, index: number) => (
                <ItemCard
                  key={index}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </Box>
          </CardBody>
        )}
      </Card>
    </Box>
  );
};

export default Products;
