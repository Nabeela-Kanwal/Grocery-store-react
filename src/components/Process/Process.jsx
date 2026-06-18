import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsTruck } from "react-icons/bs";
import { FaLeaf, FaTemperatureLow } from "react-icons/fa";
import { FiCheckCircle, FiPackage } from "react-icons/fi";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Basket from "../../assets/basket-full-vegetables.png";
import FruitsVeggies from "../../assets/fruits-and-veggies.png";

const Process = () => {
  const { pathname } = useLocation();
  const [activeFreshnessId, setActiveFreshnessId] = useState(
    freshnessChecks[0].id,
  );
  const isProcessPage = pathname.toLowerCase() === "/process";

  const activeFreshness = freshnessChecks.find(
    (item) => item.id === activeFreshnessId,
  );

  const renderTimeline = (
    <ProcessTimeline
      intro={
        isProcessPage
          ? "Every order follows a careful route from trusted sourcing to clean packing and quick delivery."
          : ""
      }
    />
  );

  if (!isProcessPage) {
    return renderTimeline;
  }

  const renderHighlights = highlights.map((item) => (
    <div
      key={item.id}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-2xl text-white">
        {item.icon}
      </span>
      <h3 className="mt-5 text-2xl font-bold text-zinc-800">{item.title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-600">{item.description}</p>
    </div>
  ));

  const renderFreshnessTabs = freshnessChecks.map((item) => {
    const isActive = activeFreshnessId === item.id;

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => setActiveFreshnessId(item.id)}
        className={`rounded-xl border px-5 py-4 text-left transition ${
          isActive
            ? "border-green-800 bg-green-800 text-white shadow-md"
            : "border-zinc-200 bg-white text-zinc-800 hover:border-green-800"
        }`}
      >
        <span className="text-sm font-semibold uppercase tracking-wider">
          Step {item.id}
        </span>
        <span className="mt-1 block text-lg font-bold">{item.title}</span>
      </button>
    );
  });

  const renderPromise = promises.map((item) => (
    <li key={item.id} className="flex items-start gap-3">
      <span className="mt-1 text-xl text-green-700">
        <FiCheckCircle />
      </span>
      <span className="text-zinc-700">{item.text}</span>
    </li>
  ));

  return (
    <div>
      <Banner title="Our Process" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              From farm to doorstep
            </span>
            <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              A careful grocery journey built around freshness and trust.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              We check every stage of your order so fresh produce, chilled
              dairy, seafood, and daily essentials arrive clean, packed, and
              ready for your kitchen.
            </p>
          </div>

          <div className="relative min-h-[390px] rounded-2xl bg-green-50 p-8">
            <img
              src={FruitsVeggies}
              alt="Fresh fruits and vegetables"
              className="mx-auto max-h-[350px] object-contain"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
                Average order route
              </p>
              <div className="mt-3 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-zinc-800">4</p>
                  <p className="text-sm text-zinc-500">checks</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-800">24h</p>
                  <p className="text-sm text-zinc-500">support</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-800">Fresh</p>
                  <p className="text-sm text-zinc-500">packed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {renderTimeline}

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Quality" heading="Controls" />
          <div className="mt-15 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {renderHighlights}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Unique freshness tracker
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              See how we protect freshness before an order leaves our store.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Tap each stage to see what our team checks while preparing your
              basket. This tracker keeps the process easy to understand and
              makes quality feel visible.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {renderFreshnessTabs}
            </div>
          </div>

          <div className="rounded-2xl bg-green-800 p-6 text-white md:p-10">
            <div className="rounded-xl bg-white p-6 text-zinc-800 shadow-lg md:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-3xl text-white">
                {activeFreshness.icon}
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-800">
                Freshness check {activeFreshness.id}
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                {activeFreshness.title}
              </h3>
              <p className="mt-4 leading-relaxed text-zinc-600">
                {activeFreshness.description}
              </p>

              <div className="mt-8 rounded-xl bg-green-50 p-5">
                <p className="font-semibold text-zinc-800">Team focus</p>
                <p className="mt-2 text-zinc-600">{activeFreshness.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className="grid items-center gap-12 rounded-2xl bg-zinc-100 p-8 md:grid-cols-[0.8fr_1fr] md:p-12">
          <div>
            <img
              src={Basket}
              alt="Basket filled with fresh vegetables"
              className="mx-auto max-h-[360px] object-contain"
            />
          </div>

          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              What you receive
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Groceries packed with care, clarity, and consistency.
            </h2>
            <ul className="mt-8 grid gap-4">{renderPromise}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcessTimeline = ({ intro = "" }) => {
  const renderSteps = steps.map((item) => (
    <div
      key={item.id}
      className={`relative flex items-start gap-4 md:absolute md:w-64 ${item.position}`}
    >
      <span className="absolute -top-14 left-12 hidden size-16 items-center justify-center rounded-full bg-white text-5xl text-zinc-800 outline-2 outline-offset-4 outline-dashed outline-zinc-800 md:flex">
        {item.number}
      </span>
      <div className="flex shrink-0 items-center justify-center">
        <span className="mt-10 flex size-12 items-center justify-center rounded-full bg-green-700 text-2xl text-white shadow-sm md:size-11 md:text-xl">
          {item.icon}
        </span>
      </div>
      <div>
        <span className="mb-2 flex size-10 items-center justify-center rounded-full bg-white text-3xl text-zinc-800 outline-2 outline-offset-3 outline-dashed outline-zinc-800 md:hidden">
          {item.number}
        </span>
        <h4 className="mt-10 text-base font-bold text-zinc-800 md:text-sm">
          {item.title}
        </h4>
        <p className="mt-1 max-w-44 text-sm leading-relaxed text-zinc-600 md:text-xs">
          {item.para}
        </p>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" accent="green" />
        </div>
        {intro && (
          <p className="mt-6 max-w-[620px] text-lg text-zinc-600">{intro}</p>
        )}
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
    para: "We select seasonal produce and essentials from trusted growers and suppliers.",
    icon: <PiPlant />,
    position: "md:left-[8%] md:top-44",
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Preparation",
    para: "Items are sorted, cleaned where needed, and prepared for careful packing.",
    icon: <PiFactory />,
    position: "md:left-[31%] md:top-12",
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Freshness, temperature, and item condition are checked before dispatch.",
    icon: <SlBadge />,
    position: "md:left-[54%] md:top-44",
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Delivery",
    para: "Orders are packed neatly and routed quickly for pickup or doorstep delivery.",
    icon: <BsTruck />,
    position: "md:left-[76%] md:top-12",
  },
];

const highlights = [
  {
    id: 1,
    title: "Farm Selection",
    description:
      "We choose suppliers based on freshness, consistency, and care for the produce.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    title: "Cold Care",
    description:
      "Dairy, seafood, and sensitive groceries are handled separately for better quality.",
    icon: <FaTemperatureLow />,
  },
  {
    id: 3,
    title: "Clean Packing",
    description:
      "Orders are grouped and packed to protect delicate items from heavier products.",
    icon: <FiPackage />,
  },
  {
    id: 4,
    title: "Quick Routing",
    description:
      "Delivery routes are prepared to keep grocery orders moving without long delays.",
    icon: <BsTruck />,
  },
];

const freshnessChecks = [
  {
    id: 1,
    title: "Color & Texture",
    description:
      "Produce is checked for vibrant color, firm texture, and signs of freshness before it is added to an order.",
    focus: "Remove bruised, wilted, or overripe items before packing.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    title: "Temperature",
    description:
      "Cold items are separated from pantry products so dairy, seafood, and chilled goods stay protected.",
    focus: "Keep sensitive groceries grouped and ready for quick dispatch.",
    icon: <FaTemperatureLow />,
  },
  {
    id: 3,
    title: "Smart Packing",
    description:
      "Soft produce and fragile items are placed away from heavier groceries to reduce damage during delivery.",
    focus: "Pack by weight, shape, and product sensitivity.",
    icon: <FiPackage />,
  },
  {
    id: 4,
    title: "Final Dispatch",
    description:
      "The order is reviewed one last time before it leaves for pickup or doorstep delivery.",
    focus: "Confirm item count, order notes, and delivery readiness.",
    icon: <BsTruck />,
  },
];

const promises = [
  {
    id: 1,
    text: "Fresh produce chosen for color, texture, and daily availability.",
  },
  {
    id: 2,
    text: "Separate handling for chilled, delicate, and pantry products.",
  },
  {
    id: 3,
    text: "Packing that protects soft fruits, greens, dairy, and seafood.",
  },
  {
    id: 4,
    text: "A final review before every order is released for delivery or pickup.",
  },
];
