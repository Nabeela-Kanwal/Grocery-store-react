import React from "react";
import Grocery from "../../assets/grocery.png";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <div></div>
        <div>
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
