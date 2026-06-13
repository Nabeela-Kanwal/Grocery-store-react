import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";

const AllProducts = () => {
  const renderCards = ProductList.map((product) => {
    return <Cards key={product.id} product={product} />;
  });

  return (
    <section>
      <Banner title="All Products" />
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="All" heading="Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
