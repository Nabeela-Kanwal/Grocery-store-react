import React from "react";
import Grocery from "../../assets/grocery.png";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <div>
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-3 rounded-full">Export Best Quality...</span>
        </div>
        <div>
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
