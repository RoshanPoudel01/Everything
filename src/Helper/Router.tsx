import { createBrowserRouter } from "react-router-dom";
import Products from "../Display/Products";
import ViewProduct from "../Display/ViewProduct";
import SearchResult from "../Display/SearchResult";
import { NavLink } from "./NavLink";
import ProductForm from "../Form/ProductForm";
import Home from "../Display/Home";
export const router = createBrowserRouter([
  {
    path: NavLink?.FirstPage,
    element: <Home />,
  },
  {
    path: NavLink?.Products,
    element: <Products />,
  },
  {
    path: NavLink?.ViewProduct,
    element: <ViewProduct />,
  },
  {
    path: NavLink?.Search,
    element: <SearchResult />,
  },
  {
    path: NavLink?.ProductForm,
    element: <ProductForm />,
  },
]);