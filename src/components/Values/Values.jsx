import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import Basket from '../../assets/basket-full-vegetables.png';

const Values = () => {
  return (
    <section>
      <div className="max-w-[1400px] macx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex">
          <div></div>
          <div>
            <img src={Basket} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: <FaHeart />,
  },

  {
    id: 2,
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },

  {
    id: 3,
    title: "Food Safety",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShield />,
  },

  {
    id: 4,
    title: "100% Organic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
