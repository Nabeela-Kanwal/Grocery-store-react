import React from "react";
import Heading from "../Heading/Heading";
import fruitsCat from "../../assets/fruits-and-veggies.png";
import Dairyat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";


const Category = () => {
  return (
    <div className="py-20">
      <Heading highlight="Shop" heading="By Category" />
    </div>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "fruits and Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitsCat,
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: Dairyat,
  },

  {
    id: 3,
    title: "Meet & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
  },
];
