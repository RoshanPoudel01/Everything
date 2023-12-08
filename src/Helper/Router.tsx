import { createBrowserRouter } from "react-router-dom";
import Products from "../Display/Products";
import ViewProduct from "../Display/ViewProduct";
import SearchResult from "../Display/SearchResult";
import { NavLink } from "./NavLink";
import ProductForm from "../Form/ProductForm";
import Home from "../Display/Home";

import NavBar from "../Components/Navbar/NavBar";
import SideItem from "../Components/SideBar/SideItem";
import Footer from "../Components/Footer/Footer";
export const router = createBrowserRouter([
  {
    path: NavLink?.FirstPage,
    element: (
      <NavBar>
        <SideItem>
          <Home />
        </SideItem>
        <Footer />
      </NavBar>
    ),
  },
  {
    path: NavLink?.Products,
    element: (
      <NavBar>
        <SideItem>
          <Products />
        </SideItem>
      </NavBar>
    ),
  },
  {
    path: NavLink?.ViewProduct,
    element: (
      <NavBar>
        <ViewProduct />
      </NavBar>
    ),
  },
  {
    path: NavLink?.Search,
    element: (
      <NavBar>
        <SideItem>
          <SearchResult />
        </SideItem>
      </NavBar>
    ),
  },
  {
    path: NavLink?.ProductForm,
    element: <ProductForm />,
  },
]);
