import React from "react";
import Heading from "../Heading/Heading";
import fruitsCat from "../../assets/fruits-and-veggies.png";
import Dairyat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";

const Category = () => {
  const renderCards = category.map((cards) => {
    return (
      <div className="flex-1 basis-[300px]" key={cards.id}>
        <div className="w-full min-h-[30vh] relative -mb-10 ">
          <img
            src={cards.image}
            alt={cards.title}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-zinc-100 pt-17 p-8 rounded -xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{cards.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{cards.description}</p>
          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Shop" heading="By Category" />
      <div className="flex flex-wrap gap-10 w md:mt-15">{renderCards}</div>
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
