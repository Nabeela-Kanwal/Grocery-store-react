import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = () => {
  return (
    <div>
      {/* card icons */}
      <div>
        <span>
          <FaHeart />
        </span>
        <button>
          <FaPlus />
        </button>
      </div>
      {/* card image  */}
      <div>
        <img src="" alt="" />
      </div>
      {/* card content */}
      <div>
        <h3>title</h3>
        <p>00</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
