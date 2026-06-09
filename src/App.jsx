import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
