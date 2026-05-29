import React from "react";
import Heading from "../Heading/Heading";

const Products = () => {
  const categories = ["ALl", "Fruits", "Vegetables", "Dairy", "Sea Food"];
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div>
          {categories.map((category) => {
            return (
              <button key={category} className="zinc-100 px-5 py-2 text-lg ">
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
