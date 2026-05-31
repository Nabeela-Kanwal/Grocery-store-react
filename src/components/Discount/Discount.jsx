import React from "react";
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section className="bg-zinc-100 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 text-center md:text-left">
          <span className="text-7xl sm:text-8xl md:text-9xl text-green-700 font-bold leading-none">
            20%
          </span>

          <div className="max-w-[700px]">
            <h3 className="text-4xl sm:text-5xl lg:text-7xl text-zinc-800 font-bold leading-tight">
              First Order Discount
            </h3>
            <p className="text-zinc-600 my-6 max-w-[620px] mx-auto md:mx-0">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <Button content="Get a Discount" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
