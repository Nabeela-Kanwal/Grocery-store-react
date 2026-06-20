import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 px-6 py-14 sm:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 py-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr] lg:gap-12 lg:py-10">
        <div>
          <a href="/" className="text-3xl font-bold">
            Gr<span className="text-green-800">O</span>cery
          </a>
          <p className="mt-4 max-w-[350px] text-zinc-600">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="mt-6 text-zinc-800">
            2026 &copy; Grocery. All rights reserved.
          </p>
        </div>

        <ul>
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-5">
            <a href="/" className="text-zinc-800 hover:text-green-800">
              Home
            </a>
          </li>
          <li className="mt-4">
            <a href="/about" className="text-zinc-800 hover:text-green-800">
              About
            </a>
          </li>
          <li className="mt-4">
            <a href="/faqs" className="text-zinc-800 hover:text-green-800">
              FAQs
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-5">
            <a
              href="/support-center"
              className="text-zinc-800 hover:text-green-800"
            >
              Support Center
            </a>
          </li>
          <li className="mt-4">
            <a href="/feedback" className="text-zinc-800 hover:text-green-800">
              Feedback
            </a>
          </li>
          <li className="mt-4">
            <a href="/contactus" className="text-zinc-800 hover:text-green-800">
              Contact Us
            </a>
          </li>
        </ul>

        <div>
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions or Feedback? <br />
            We'd love to hear from you!
          </p>
          <form className="mt-6 flex w-full max-w-[360px] items-center rounded-full border border-zinc-300 bg-white px-4 py-2 focus-within:border-green-800">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="w-full bg-transparent text-zinc-800 outline-none placeholder:text-zinc-500"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 text-white transition hover:bg-green-900"
              aria-label="Submit email"
            >
              <IoIosArrowForward />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
