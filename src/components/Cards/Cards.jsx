import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({ product }) => {
  return (
    <div className="bg-zinc-100 rounded-lg p-5 shadow-sm">
      {/* card icons */}
      <div className="flex justify-between text-zinc-700">
        <span className="cursor-pointer  hover:text-red-500">
          <FaHeart />
        </span>
        <button className="cursor-pointer bg-green-700 h-8 w-8 rounded-lg text-white flex items-center justify-center">
          <FaPlus />
        </button>
      </div>
      {/* card image  */}
      <div className="h-45 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>
      {/* card content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-zinc-800">{product.name}</h3>
        <p className="text-green-700 font-semibold my-3">
          ${product.price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
