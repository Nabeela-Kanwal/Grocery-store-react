import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa";

const Values = () => {
  return (
    <section>
      <div className="max-w-[1400px] macx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />
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
];
