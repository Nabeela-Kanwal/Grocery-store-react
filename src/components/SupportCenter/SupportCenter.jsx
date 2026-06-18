import { BsTruck } from "react-icons/bs";
import { FaLeaf, FaRegCreditCard } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Grocery from "../../assets/grocery.png";

const SupportCenter = () => {
  const renderSupportCards = supportCards.map((item) => (
    <div
      key={item.id}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-2xl text-white">
        {item.icon}
      </span>
      <h3 className="mt-5 text-2xl font-bold text-zinc-800">{item.title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-600">{item.description}</p>
      <a
        href={item.href}
        className="mt-5 inline-block font-semibold text-green-800 hover:text-green-700"
      >
        {item.action}
      </a>
    </div>
  ));

  const renderSteps = supportSteps.map((item) => (
    <div key={item.id} className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
        {item.id}
      </span>
      <div>
        <h3 className="text-xl font-bold text-zinc-800">{item.title}</h3>
        <p className="mt-2 leading-relaxed text-zinc-600">{item.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <Banner title="Support Center" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Fast customer care
            </span>
            <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Get help with orders, delivery, payments, and fresh groceries.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Our support team helps with missing items, delivery updates,
              payment questions, pickup timing, and product freshness concerns.
            </p>

            <div className="mt-8 flex max-w-[620px] flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm sm:flex-row">
              <input
                type="search"
                placeholder="Search your support question..."
                className="h-12 flex-1 rounded-lg px-4 text-zinc-800 outline-none"
              />
              <button
                type="button"
                className="rounded-lg bg-green-800 px-7 py-3 font-semibold text-white transition hover:bg-green-900"
              >
                Search
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-green-50 p-8">
            <img
              src={Grocery}
              alt="Fresh groceries in a paper bag"
              className="mx-auto max-h-[380px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Support" heading="Options" />
          <div className="mt-15 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {renderSupportCards}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              How support works
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Simple steps to solve your grocery issue quickly.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Share your order details, tell us what happened, and we will help
              with the next best action.
            </p>
          </div>

          <div className="grid gap-7 rounded-2xl bg-white p-8 shadow-sm">
            {renderSteps}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className="overflow-hidden rounded-2xl bg-green-800 text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_0.7fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                Still need help?
              </p>
              <h2 className="mt-3 max-w-[720px] text-4xl font-bold leading-tight md:text-5xl">
                Contact us and we will help you finish the order experience.
              </h2>
              <p className="mt-5 max-w-[650px] leading-relaxed text-green-50">
                We can check order notes, product condition, delivery timing,
                and refund or replacement requests.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="/contactus"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-green-800 transition hover:bg-green-100"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportCenter;

const supportCards = [
  {
    id: 1,
    title: "Order Help",
    description:
      "Track orders, update pickup details, and get help with missing items.",
    action: "View order help",
    href: "/faqs",
    icon: <FiPackage />,
  },
  {
    id: 2,
    title: "Delivery",
    description:
      "Check timing, delivery windows, routing updates, and doorstep issues.",
    action: "Delivery FAQs",
    href: "/faqs",
    icon: <BsTruck />,
  },
  {
    id: 3,
    title: "Payments",
    description:
      "Get help with checkout, receipts, payment methods, and billing questions.",
    action: "Payment help",
    href: "/faqs",
    icon: <FaRegCreditCard />,
  },
  {
    id: 4,
    title: "Freshness",
    description:
      "Tell us about product quality, replacements, or freshness concerns.",
    action: "Send feedback",
    href: "/feedback",
    icon: <FaLeaf />,
  },
];

const supportSteps = [
  {
    id: 1,
    title: "Choose the issue",
    description:
      "Start with orders, delivery, payment, freshness, or general support.",
  },
  {
    id: 2,
    title: "Share order details",
    description:
      "Add your order number, contact details, and a short note about what happened.",
  },
  {
    id: 3,
    title: "Get a clear response",
    description:
      "Our team reviews your message and replies with the next steps as soon as possible.",
  },
];
