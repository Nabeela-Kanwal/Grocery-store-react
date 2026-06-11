import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../../ProductList/ProductList";

const CategoryPage = () => {
    const renderProduct = ProductList.map(product=> {
        return(
            <Card />
        )
    })
  return (
    <div>
      <Banner />
      {renderProduct}
    </div>
  );
};

export default CategoryPage;
