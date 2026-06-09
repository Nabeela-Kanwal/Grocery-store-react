import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-[1400px] mx-auto py-10">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-green-800">O</span>cery
          </a>
          <p className="text-zinc-600 mt-4 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">
            2025 &copy; Grocery. All rights reserved.
          </p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-green-800">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-green-800">
              FAQs
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-green-800">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-green-800">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-green-800">
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
          <form className="mt-6 flex max-w-[360px] items-center rounded-full border border-zinc-300 bg-white px-4 py-2 focus-within:border-green-800">
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
