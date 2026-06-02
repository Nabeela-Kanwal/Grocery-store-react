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
        className={`relative flex items-start gap-4 md:absolute md:w-64 ${items.position}`}
      >
        <span className="absolute -top-14 left-12 hidden size-16 items-center justify-center rounded-full bg-white text-5xl text-zinc-800 outline-2 outline-offset-4 outline-dashed outline-zinc-800 md:flex">
          {items.number}
        </span>
        <div className="flex shrink-0 items-center justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-green-700 text-2xl text-white shadow-sm md:size-11 md:text-xl">
            {items.icon}
          </span>
        </div>
        <div>
          <span className="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-3xl text-zinc-800 outline-2 outline-offset-3 outline-dashed outline-zinc-800 md:hidden">
            {items.number}
          </span>
          <h4 className="text-base font-bold text-zinc-800 md:text-sm">
            {items.title}
          </h4>
          <p className="mt-1 max-w-44 text-sm leading-relaxed text-zinc-600 md:text-xs">
            {items.para}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" accent="green" />
        </div>
        <div className="relative mt-16 grid gap-14 md:mt-24 md:h-96 md:block">
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
    position: "md:left-[8%] md:top-44",
  },

  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
    position: "md:left-[31%] md:top-12",
  },

  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
    position: "md:left-[54%] md:top-44",
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
    position: "md:left-[76%] md:top-12",
  },
];
