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
      <div
        key={items.id}
        className="relative flex flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
      >
        <span className="absolute -top-4 left-6 text-4xl text-green-700 bg-white rounded-full">
          {items.number}
        </span>
        <div className="flex items-start gap-4 pt-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-green-100 text-3xl text-green-700">
            <span>{items.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-800">{items.title}</h3>
            <p className="mt-2 text-zinc-600">{items.para}</p>
          </div>
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
        <div className="grid gap-8 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {renderSteps}
        </div>
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
