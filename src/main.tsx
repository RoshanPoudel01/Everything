import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { router } from "./Helper/Router";
import NavBar from "./Components/Navbar/NavBar";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraProvider>
);
