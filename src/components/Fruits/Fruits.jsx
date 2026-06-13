import CategoryPage from "../CategoryPage/CategoryPage";
import bgFruits from "../../assets/fruit-banner.jpg";

const Fruits = () => {
  return <CategoryPage title="Fruits & Veggies" categories={["Fruits"]}  bgImage={bgFruits}/>;
};

export default Fruits;
