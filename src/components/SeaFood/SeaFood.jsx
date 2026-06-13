import CategoryPage from "../CategoryPage/CategoryPage";
import bgSeafood from "../../assets/seafood-banner.jpg";


const SeaFood = () => {
  return <CategoryPage categories={["Meat", "SeaFood"]} bgImage={bgSeafood} />;
};

export default SeaFood;
