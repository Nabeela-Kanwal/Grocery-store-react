import React from "react";
import Button from "../Button/Button";


const Discount = () => {
  return (
    <section className="bg-zinc-100">
      <div className="flex max-w-[1400px] mx-auto py-10">
        <span>20%</span>
        <div>
          <h3 className="text-7xl text-zinc-800 font-bold">First Order Discount</h3>
          <p className="text-zinc-600 my-6">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
