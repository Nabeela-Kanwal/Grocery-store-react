import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-[1400px] mx-auto h-[14vh] flex justify-between item-center bg-red-300">
        <a href="">
          Gr<span>O</span>cery
        </a>
        <ul className="flex">
          <li>
            <a href="">Home</a> 
          </li>
          <li>
            About <a href="">About Us</a>
          </li>
          <li>
            Process <a href="">Process</a>
          </li>
          <li>
            Contact <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
