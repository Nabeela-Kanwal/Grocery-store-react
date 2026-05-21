import React from "react";

const Navbar = () => {
  return (
    <header className="bg-red-300">
      <nav className="max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center">
        <a href="">
          Gr<span>O</span>cery
        </a>
        <ul className="flex">
          <li>
            <a href="">Home</a> 
          </li>
          <li>
             <a href="">About Us</a>
          </li>
          <li>
             <a href="">Process</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
