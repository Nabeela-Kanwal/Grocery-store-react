import { useState } from "react";
import { BsTruck } from "react-icons/bs";
import { FaLeaf, FaRegCreditCard } from "react-icons/fa";
import { FiChevronDown, FiHeadphones } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Basket from "../../assets/basket-full-vegetables.png";

const Faqs = () => {
  const [activeId, setActiveId] = useState(faqs[0].id);

  const toggleFaq = (id) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  const renderTopics = topics.map((topic) => (
    <div
      key={topic.id}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-2xl text-white">
        {topic.icon}
      </span>
      <h3 className="mt-5 text-2xl font-bold text-zinc-800">{topic.title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-600">{topic.description}</p>
    </div>
  ));

  const renderFaqs = faqs.map((faq) => {
    const isOpen = activeId === faq.id;

    return (
      <div
        key={faq.id}
        className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-bold text-zinc-800">
            {faq.question}
          </span>
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-800 transition ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <FiChevronDown />
          </span>
        </button>

        {isOpen && (
          <div className="border-t border-zinc-200 px-6 py-5">
            <p className="leading-relaxed text-zinc-600">{faq.answer}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <Banner title="FAQs" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Quick answers
            </span>
            <h1 className="mt-6 max-w-[680px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Everything you need to know before your grocery order.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Find answers about freshness, delivery, payment, returns, and
              support. If you still need help, our grocery team is ready to
              guide you.
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-8">
            <img
              src={Basket}
              alt="Basket of fresh vegetables"
              className="mx-auto max-h-[360px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Help" heading="Topics" />
          <div className="mt-15 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {renderTopics}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Common questions
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Clear answers for a smoother shopping experience.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Browse the most asked questions from customers who order fresh
              produce, dairy, seafood, and daily essentials from Grocery.
            </p>
          </div>

          <div className="grid gap-4">{renderFaqs}</div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className="overflow-hidden rounded-2xl bg-green-800 text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_0.7fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                Need more help?
              </p>
              <h2 className="mt-3 max-w-[720px] text-4xl font-bold leading-tight md:text-5xl">
                Our support team can help with orders, delivery, and product
                questions.
              </h2>
              <p className="mt-5 max-w-[650px] leading-relaxed text-green-50">
                Reach out any time and we will help you choose, track, or fix
                anything related to your grocery order.
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

export default Faqs;

const topics = [
  {
    id: 1,
    title: "Freshness",
    description:
      "Learn how we select, pack, and protect fresh products before delivery.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    title: "Delivery",
    description:
      "Get details about delivery timing, pickup options, and order tracking.",
    icon: <BsTruck />,
  },
  {
    id: 3,
    title: "Payment",
    description:
      "Find answers about secure checkout, payment methods, and receipts.",
    icon: <FaRegCreditCard />,
  },
  {
    id: 4,
    title: "Support",
    description:
      "See how we handle returns, replacements, missing items, and feedback.",
    icon: <FiHeadphones />,
  },
];

const faqs = [
  {
    id: 1,
    question: "How do you keep fruits and vegetables fresh?",
    answer:
      "We source produce in small batches, inspect it before packing, and keep it in proper storage until it is ready for delivery or pickup.",
  },
  {
    id: 2,
    question: "Can I schedule my grocery delivery?",
    answer:
      "Yes. You can choose an available delivery window during checkout. Our team packs your order close to the selected time so it arrives fresh.",
  },
  {
    id: 3,
    question: "What should I do if an item is missing or damaged?",
    answer:
      "Contact our support team with your order details. We will review the issue and help with a replacement, refund, or store credit where applicable.",
  },
  {
    id: 4,
    question: "Do you offer store pickup?",
    answer:
      "Yes. Select pickup at checkout, choose your preferred time, and your groceries will be packed and ready when you arrive.",
  },
  {
    id: 5,
    question: "Are dairy and seafood items kept cold?",
    answer:
      "Cold items are handled separately and packed with care to maintain quality during storage, pickup, and delivery.",
  },
  {
    id: 6,
    question: "Which payment methods are accepted?",
    answer:
      "You can pay with major cards and supported digital payment options at checkout. Order receipts are shared after payment confirmation.",
  },
  {
    id: 7,
    question: "Can I change or cancel an order?",
    answer:
      "You can request changes before your order is packed. Once preparation has started, availability depends on the delivery or pickup timeline.",
  },
  {
    id: 8,
    question: "How can I share feedback about my order?",
    answer:
      "Use the contact page or support links to tell us about your experience. Customer feedback helps us improve product quality and delivery service.",
  },
];
