import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fruits",
      element: <Fruits />,
    },
    {
      path: "/dairy",
      element: <Dairy />,
    },
    {
      path: "/seafood",
      element: <SeaFood />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
