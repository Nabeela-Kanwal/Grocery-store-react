import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import AllBanner from "../../assets/all-banner.jpg";

const ContactUs = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FiPhone />,
      title: "Call Us",
      details: "+1 (555) 014-8765",
      note: "Mon to Sat, 8am - 8pm",
    },
    {
      id: 2,
      icon: <FiMail />,
      title: "Email Us",
      details: "support@grocery.com",
      note: "We reply within 24 hours",
    },
    {
      id: 3,
      icon: <FiMapPin />,
      title: "Visit Store",
      details: "128 Market Street, New York",
      note: "Fresh pickup every day",
    },
    {
      id: 4,
      icon: <FiClock />,
      title: "Open Hours",
      details: "8:00 AM - 10:00 PM",
      note: "Sunday opens at 9am",
    },
  ];

  return (
    <div>
      <Banner title="Contact Us" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              We are here to help
            </span>
            <h1 className="mt-6 max-w-[580px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Need fresh groceries or order support?
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-zinc-600">
              Send us a message and our team will help with delivery questions,
              product availability, bulk orders, and store pickup requests.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-2xl text-white">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-zinc-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-semibold text-green-800">
                    {item.details}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-6 md:p-10">
            <form className="rounded-xl bg-white p-6 shadow-sm md:p-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-800">
                  Send Message
                </h2>
                <p className="mt-2 text-zinc-600">
                  Fill the form and we will get back to you shortly.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-zinc-800">
                    First Name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-zinc-800">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="font-semibold text-zinc-800">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>

                <label className="block">
                  <span className="font-semibold text-zinc-800">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 555 000 0000"
                    className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="font-semibold text-zinc-800">Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="mt-2 h-12 w-full rounded-lg border border-zinc-300 px-4 text-zinc-800 outline-none transition focus:border-green-800"
                />
              </label>

              <label className="mt-5 block">
                <span className="font-semibold text-zinc-800">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-zinc-800 outline-none transition focus:border-green-800"
                ></textarea>
              </label>

              <div className="mt-7">
                <Button content="Send Message" />
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 grid gap-8 overflow-hidden rounded-2xl bg-green-800 text-white md:grid-cols-[1fr_1.4fr]">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold">Find Your Nearest Store</h2>
            <p className="mt-4 leading-relaxed text-green-50">
              Drop by for farm-fresh produce, daily deals, and quick pickup from
              our grocery team.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-800 transition hover:bg-green-100"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-800 transition hover:bg-green-100"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-800 transition hover:bg-green-100"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="min-h-[320px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(220,252,231,0.86)),url('/src/assets/basket-full-vegetables.png')] bg-contain bg-center bg-no-repeat">
            <div className="flex h-full items-end p-8 md:p-10">
              <div className="w-full rounded-xl bg-white/95 p-6 text-zinc-800 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
                  Main Store
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  128 Market Street, New York
                </h3>
                <p className="mt-2 text-zinc-600">
                  Fresh fruits, vegetables, dairy, seafood, and pantry items
                  available every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
