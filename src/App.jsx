import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fruits",
      element: <h1>Fruits</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
