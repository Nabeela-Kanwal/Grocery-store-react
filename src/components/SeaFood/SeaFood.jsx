import CategoryPage from "../CategoryPage/CategoryPage";
import bgFruits from "../../assets/seafood-banner.jpg";


const SeaFood = () => {
  return <CategoryPage categories={["Meat", "SeaFood"]} bgImage={bgFruits} />;
};

export default SeaFood;
