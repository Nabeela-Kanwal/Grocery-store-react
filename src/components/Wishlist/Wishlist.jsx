import { useMemo, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiFilter, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import AllBanner from "../../assets/all-banner.jpg";
import Basket from "../../assets/basket-full-vegetables.png";

const Wishlist = () => {
  const defaultItems = ProductList.filter((product) =>
    [1, 2, 7, 10, 16, 19, 24, 25].includes(product.id),
  );
  const [wishlistItems, setWishlistItems] = useState(defaultItems);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(wishlistItems.map((item) => item.category))],
    [wishlistItems],
  );

  const filteredItems =
    activeCategory === "All"
      ? wishlistItems
      : wishlistItems.filter((item) => item.category === activeCategory);

  const totalValue = wishlistItems.reduce(
    (total, item) => total + item.price,
    0,
  );

  const removeItem = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const renderCategories = categories.map((category) => (
    <button
      key={category}
      type="button"
      onClick={() => setActiveCategory(category)}
      className={`rounded-full border px-5 py-3 font-semibold transition ${
        activeCategory === category
          ? "border-green-800 bg-green-800 text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-green-800"
      }`}
    >
      {category}
    </button>
  ));

  const renderWishlistItems = filteredItems.map((product) => (
    <div
      key={product.id}
      className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500">
          <FaHeart />
        </span>
        <button
          type="button"
          onClick={() => removeItem(product.id)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition hover:bg-red-50 hover:text-red-500"
          aria-label={`Remove ${product.name} from wishlist`}
        >
          <FiTrash2 />
        </button>
      </div>

      <div className="mt-5 flex h-48 items-center justify-center rounded-xl bg-zinc-100 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
          {product.category}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-zinc-800">
          {product.name}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xl font-bold text-green-800">
            ${product.price.toFixed(2)}
          </p>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-b from-green-700 to-green-800 px-5 py-3 font-semibold text-white transition hover:to-green-600"
          >
            <FiShoppingBag />
            Add
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Banner title="Wishlist" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Saved for later
            </span>
            <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Keep your favorite groceries ready for the next order.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Review fresh produce, dairy, seafood, and daily essentials you
              want to buy again. Filter your saved items and move them to your
              cart when you are ready.
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-8">
            <img
              src={Basket}
              alt="Basket filled with fresh vegetables"
              className="mx-auto max-h-[360px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Wishlist" heading="Summary" />
          <div className="mt-15 grid gap-7 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <FaRegHeart />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">
                {wishlistItems.length}
              </h3>
              <p className="mt-2 text-zinc-600">Saved items</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <FiShoppingBag />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">
                ${totalValue.toFixed(2)}
              </h3>
              <p className="mt-2 text-zinc-600">Estimated total</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <BsTruck />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">Fast</h3>
              <p className="mt-2 text-zinc-600">Pickup or delivery ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="flex w-fit items-center gap-2 rounded-full bg-green-100 px-5 py-3 text-lg text-green-700">
              <FiFilter />
              Filter saved items
            </span>
            <h2 className="mt-6 text-4xl font-bold text-zinc-800 md:text-5xl">
              Your Saved Groceries
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">{renderCategories}</div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {renderWishlistItems}
          </div>
        ) : (
          <div className="rounded-2xl bg-zinc-100 p-10 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-green-800">
              <FaRegHeart />
            </span>
            <h3 className="mt-5 text-3xl font-bold text-zinc-800">
              No saved items here
            </h3>
            <p className="mx-auto mt-3 max-w-[520px] text-zinc-600">
              Try another category or explore products to save fresh favorites
              for your next grocery run.
            </p>
            <a
              href="/allproducts"
              className="mt-7 inline-block rounded-lg bg-green-800 px-8 py-3 font-semibold text-white transition hover:bg-green-900"
            >
              Explore Products
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
