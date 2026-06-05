import React from "react";
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
          <div>
            <input
              type="email"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Email Address"
            />
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
