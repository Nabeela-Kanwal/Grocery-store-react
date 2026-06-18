import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiCheckCircle, FiMessageCircle, FiSend } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";

const Feedback = () => {
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState(feedbackCategories[0]);

  const renderStars = [1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      onClick={() => setRating(star)}
      className={`text-3xl transition ${
        star <= rating ? "text-yellow-500" : "text-zinc-300"
      }`}
      aria-label={`${star} star rating`}
    >
      <FaStar />
    </button>
  ));

  const renderCategories = feedbackCategories.map((item) => (
    <button
      key={item}
      type="button"
      onClick={() => setCategory(item)}
      className={`rounded-full border px-5 py-3 font-semibold transition ${
        category === item
          ? "border-green-800 bg-green-800 text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-green-800"
      }`}
    >
      {item}
    </button>
  ));

  const renderReviews = reviews.map((review) => (
    <div
      key={review.id}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-zinc-800">{review.name}</h3>
          <p className="text-sm text-green-800">{review.label}</p>
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-zinc-600">{review.message}</p>
    </div>
  ));

  return (
    <div>
      <Banner title="Feedback" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Your voice matters
            </span>
            <h1 className="mt-6 max-w-[680px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Tell us how your grocery experience felt.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Share what went well or what we should improve. Your feedback
              helps us keep groceries fresh, delivery smooth, and support
              helpful.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-xl text-green-700">
                  <FiCheckCircle />
                </span>
                <p className="text-zinc-700">
                  Product quality feedback goes directly into freshness checks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-xl text-green-700">
                  <FiCheckCircle />
                </span>
                <p className="text-zinc-700">
                  Delivery notes help improve packing and route timing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-xl text-green-700">
                  <FiCheckCircle />
                </span>
                <p className="text-zinc-700">
                  Support comments help us respond faster and more clearly.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-6 md:p-10">
            <form className="rounded-xl bg-white p-6 shadow-sm md:p-8">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-3xl text-white">
                  <FiMessageCircle />
                </div>
                <h2 className="mt-5 text-3xl font-bold text-zinc-800">
                  Send Feedback
                </h2>
                <p className="mt-2 text-zinc-600">
                  Rate your experience and tell us what happened.
                </p>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-zinc-800">Your Rating</p>
                <div className="mt-3 flex gap-2">{renderStars}</div>
              </div>

              <div className="mt-7">
                <p className="font-semibold text-zinc-800">Feedback Type</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {renderCategories}
                </div>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-zinc-800">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-zinc-800">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="font-semibold text-zinc-800">Order Number</span>
                <input
                  type="text"
                  name="orderNumber"
                  placeholder="Optional"
                  className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                />
              </label>

              <label className="mt-5 block">
                <span className="font-semibold text-zinc-800">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us what we should know..."
                  className="mt-2 w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-zinc-800 outline-none transition focus:border-green-800"
                ></textarea>
              </label>

              <button
                type="submit"
                className="mt-7 flex items-center gap-3 rounded-lg bg-gradient-to-b from-green-700 to-green-800 px-8 py-3 text-lg font-semibold text-white transition hover:to-green-600"
              >
                <FiSend />
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Customer" heading="Voices" />
          <div className="mt-15 grid gap-7 md:grid-cols-3">{renderReviews}</div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="overflow-hidden rounded-2xl bg-green-800 text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_0.7fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                Thank you for helping us improve
              </p>
              <h2 className="mt-3 max-w-[720px] text-4xl font-bold leading-tight md:text-5xl">
                Every message helps us make Grocery better.
              </h2>
              <p className="mt-5 max-w-[650px] leading-relaxed text-green-50">
                For urgent order issues, contact support directly so our team
                can review your request faster.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <a
                href="/support-center"
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-green-800 transition hover:bg-green-100"
              >
                Visit Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;

const feedbackCategories = [
  "Product Quality",
  "Delivery",
  "Support",
  "Website",
];

const reviews = [
  {
    id: 1,
    name: "Ayesha Khan",
    label: "Fresh produce feedback",
    image: Customer1,
    message:
      "The fruits arrived fresh and neatly packed. I liked that delicate items were kept separate.",
  },
  {
    id: 2,
    name: "Daniel Brooks",
    label: "Delivery feedback",
    image: Customer2,
    message:
      "Delivery was quick, and the support team helped me update my pickup note without hassle.",
  },
  {
    id: 3,
    name: "Sara Miller",
    label: "Support feedback",
    image: Customer3,
    message:
      "I had one missing item and the response was clear, polite, and resolved the same day.",
  },
];
