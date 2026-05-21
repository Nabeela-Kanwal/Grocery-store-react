import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cery
        </a>
        <ul className="flex items-center gap-x-15">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-x-5">
          <div className="flex p-1 border-2 border-orange-500 rounded-full">
            <input type="text" name="text" id="text" placeholder="Search..."className="flex-1 h-[5vh] px-3 focus:outline-none"/>
            <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearchSharp />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
