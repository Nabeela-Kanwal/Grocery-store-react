import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ProductList from "../ProductList/ProductList";

const CategoryPage = () => {
  const renderProduct = ProductList.map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });
  return (
    <div>
      <Banner />
      {renderProduct}
    </div>
  );
};

export default CategoryPage;
