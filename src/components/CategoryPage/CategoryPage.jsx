import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ProductList from "../ProductList/ProductList";

const CategoryPage = () => {
  const renderProduct = ProductList.map((product) => {
    return <Cards key={product.id} product={product} />;
  });
  return (
    <div>
      <Banner />
     <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
         {renderProduct}
     </div>
    </div>
  );
};

export default CategoryPage;
