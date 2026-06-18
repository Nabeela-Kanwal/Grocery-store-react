import { BsTruck } from "react-icons/bs";
import { FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Basket from "../../assets/basket-full-vegetables.png";
import FreshFruits from "../../assets/fresh-fruits.png";
import Grocery from "../../assets/grocery.png";

const About = () => {
  const renderStats = stats.map((item) => (
    <div key={item.id} className="text-center md:text-left">
      <h3 className="text-4xl font-bold text-green-800 md:text-5xl">
        {item.value}
      </h3>
      <p className="mt-2 text-zinc-600">{item.label}</p>
    </div>
  ));

  const renderFeatures = features.map((item) => (
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
      <Banner title="About Us" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Fresh from trusted growers
            </span>
            <h1 className="mt-6 max-w-[680px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              We make healthy grocery shopping simple, fresh, and reliable.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Grocery brings handpicked fruits, vegetables, dairy, seafood, and
              daily essentials closer to your table. We partner with careful
              producers, inspect every batch, and deliver food that feels as
              good as it tastes.
            </p>

            <div className="mt-9">
              <Button content="Shop Fresh" />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">{renderStats}</div>
          </div>

          <div className="relative min-h-[430px]">
            <div className="absolute right-0 top-0 w-[78%] rounded-2xl bg-green-100 p-8">
              <img
                src={Grocery}
                alt="Fresh groceries in a paper bag"
                className="h-72 w-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[58%] rounded-2xl bg-white p-5 shadow-xl">
              <img
                src={Basket}
                alt="Basket filled with fresh vegetables"
                className="h-48 w-full object-contain"
              />
            </div>
            <div className="absolute bottom-8 right-8 rounded-xl bg-green-800 px-6 py-5 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider">
                Quality Checked
              </p>
              <p className="mt-2 text-3xl font-bold">Every Day</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Why" heading="Choose Us" />
          <div className="mt-15 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {renderFeatures}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="rounded-2xl bg-green-50 p-8">
            <img
              src={FreshFruits}
              alt="Fresh fruits and vegetables"
              className="mx-auto max-h-[460px] object-contain"
            />
          </div>

          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Our Promise
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              From farm selection to your doorstep, freshness comes first.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We keep the shopping experience honest and easy: transparent
              sourcing, careful handling, quick delivery, and a support team
              ready whenever you need help with an order.
            </p>

            <ul className="mt-8 grid gap-4">{renderPromise}</ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className="overflow-hidden rounded-2xl bg-green-800 text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_0.7fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                Built for everyday meals
              </p>
              <h2 className="mt-3 max-w-[720px] text-4xl font-bold leading-tight md:text-5xl">
                Fresh groceries, fair prices, and service you can count on.
              </h2>
              <p className="mt-5 max-w-[650px] leading-relaxed text-green-50">
                Whether you are stocking the week, planning a family dinner, or
                choosing better ingredients, Grocery is here to keep your cart
                fresh and your day moving.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="/allproducts"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-green-800 transition hover:bg-green-100"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const stats = [
  {
    id: 1,
    value: "10k+",
    label: "Happy customers",
  },
  {
    id: 2,
    value: "500+",
    label: "Fresh products",
  },
  {
    id: 3,
    value: "24h",
    label: "Quick support",
  },
];

const features = [
  {
    id: 1,
    title: "Naturally Fresh",
    description:
      "Produce is selected for flavor, color, and freshness before it reaches your cart.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    title: "Trusted Sourcing",
    description:
      "We work with reliable farms and suppliers who care about quality and consistency.",
    icon: <FaSeedling />,
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "Every batch is handled with clean storage, careful packing, and quality checks.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "Fast Delivery",
    description:
      "Your daily essentials are packed neatly and delivered while they are still fresh.",
    icon: <BsTruck />,
  },
];

const promises = [
  {
    id: 1,
    text: "Seasonal fruits and vegetables selected from dependable growers.",
  },
  {
    id: 2,
    text: "Cold-chain care for dairy, seafood, and other sensitive groceries.",
  },
  {
    id: 3,
    text: "Simple ordering, helpful support, and clear communication.",
  },
  {
    id: 4,
    text: "Quality-first packing so groceries arrive ready for your kitchen.",
  },
  {
    id: 5,
    text: "Customer feedback guides how we improve products and delivery.",
  },
];
