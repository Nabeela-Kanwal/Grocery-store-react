import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((items) => (
    <div key={items.id} className="flex md:flex-row-reverse items-center gap-7">
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-700 to-green-800 w-15 h-15 rounded-full">
          {items.icon}
        </span>
      </div>

      <div className="md:text-right">
        <h3 className="text-zinc-800 text-3xl font-bold">{items.title}</h3>
        <p className="text-zinc-600 mt-2">{items.description}</p>
      </div>
    </div>
  ));

  const rightValues = value.slice(2).map((items) => (
    <div key={items.id} className="flex items-center gap-7">
      <div>
        <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-700 to-green-800 w-15 h-15 rounded-full">
          {items.icon}
        </span>
      </div>

      <div>
        <h3 className="text-zinc-800 text-3xl font-bold">{items.title}</h3>
        <p className="text-zinc-600 mt-2">{items.description}</p>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex  md:flex-row flex-col gap-5 mt-15">
          {/* left values */}

          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>

          <div className="md:flex w-1/2 hidden">
            <img src={Basket} alt="" />
          </div>

          {/* right value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
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
