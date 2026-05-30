import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Sea Food"];
  const [activeTab, setActiveTab] = useState("All");
  const filteredProducts =
    activeTab === "All"
      ? ProductList
      : ProductList.filter(
          (product) => product.category === activeTab.replace(" ", ""),
        );

  const renderCards = filteredProducts.map((product) => {
    return <Cards key={product.id} product={product} />;
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex gap-3 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                  ${activeTab === category ? "bg-gradient-to-b from-green-600 to-green-700 text-white" : "bg-white text-zinc-800"}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* productlisting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {renderCards}
        </div>
      </div>

      <div className="flex justify-center">
        <Button content="View All" />
      </div>
    </section>
  );
};

export default Products;
