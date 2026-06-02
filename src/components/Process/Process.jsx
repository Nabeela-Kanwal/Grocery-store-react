import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((items) => {
    return (
      <div>
        <span className="flex justify-center items-center w-18 h-18 rounded-full text-8xl bg-zinc-800 text-white outline=[3px]  outline-zinc-800 outline-dashed=">
          {items.number}
        </span>
        <div className="flex items-center">
          <span className="flex bg-gradient-to-b from-green-600 to-green-700 text-white">{items.icon}</span>
        </div>
        <div>
          <h4>{items.title}</h4>
          <p>{items.para}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto ">
          <Heading highlight="Our" heading="Process" />
        </div>
        <div className="flex mt-20 ">{renderSteps}</div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "t is a long established fact that a reader",
    icon: <SlBadge />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
