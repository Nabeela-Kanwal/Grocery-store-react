import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Faqs from "./components/Faqs/Faqs";
import Process from "./components/Process/Process";
import Wishlist from "./components/Wishlist/Wishlist";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "fruits",
          element: <Fruits />,
        },
        {
          path: "dairy",
          element: <Dairy />,
        },
        {
          path: "seafood",
          element: <SeaFood />,
        },
        {
          path: "allproducts",
          element: <AllProducts />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "faqs",
          element: <Faqs />,
        },
        {
          path: "process",
          element: <Process />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
