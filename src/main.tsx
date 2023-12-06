import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Theme } from "./Theme/Theme";
import { router } from "./Helper/Router";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={Theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraProvider>
);
