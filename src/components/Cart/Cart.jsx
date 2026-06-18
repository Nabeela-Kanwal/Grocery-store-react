import { useMemo, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import AllBanner from "../../assets/all-banner.jpg";
import Grocery from "../../assets/grocery.png";

const Cart = () => {
  const starterItems = useMemo(
    () =>
      ProductList.filter((product) => [1, 2, 10, 16, 24].includes(product.id)).map(
        (product, index) => ({
          ...product,
          quantity: index + 1,
        }),
      ),
    [],
  );
  const [cartItems, setCartItems] = useState(starterItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 35 || subtotal === 0 ? 0 : 4.99;
  const discount = subtotal >= 30 ? 3 : 0;
  const total = Math.max(subtotal + delivery - discount, 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const renderCartItems = cartItems.map((item) => (
    <div
      key={item.id}
      className="grid gap-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm md:grid-cols-[110px_1fr_auto] md:items-center"
    >
      <div className="flex h-28 items-center justify-center rounded-xl bg-zinc-100 p-3">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full object-contain"
        />
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
          {item.category}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-zinc-800">{item.name}</h3>
        <p className="mt-2 text-zinc-600">${item.price.toFixed(2)} each</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 md:justify-end">
        <div className="flex items-center rounded-full border border-zinc-300 bg-white p-1">
          <button
            type="button"
            onClick={() => updateQuantity(item.id, -1)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
            aria-label={`Decrease ${item.name} quantity`}
          >
            <FiMinus />
          </button>
          <span className="min-w-10 text-center font-bold text-zinc-800">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(item.id, 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-white transition hover:bg-green-900"
            aria-label={`Increase ${item.name} quantity`}
          >
            <FiPlus />
          </button>
        </div>

        <p className="min-w-20 text-xl font-bold text-green-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
          aria-label={`Remove ${item.name} from cart`}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <Banner title="Cart" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
              Ready for checkout
            </span>
            <h1 className="mt-6 max-w-[700px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Review your fresh groceries before they head to your kitchen.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Adjust quantities, remove items, and check your estimated order
              total before checkout. Your cart is packed around freshness and
              delivery care.
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-8">
            <img
              src={Grocery}
              alt="Fresh groceries in a paper bag"
              className="mx-auto max-h-[360px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Cart" heading="Overview" />
          <div className="mt-15 grid gap-7 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <FiShoppingBag />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">
                {itemCount}
              </h3>
              <p className="mt-2 text-zinc-600">Items in cart</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <FaLeaf />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">Fresh</h3>
              <p className="mt-2 text-zinc-600">Quality checked order</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-800">
                <BsTruck />
              </span>
              <h3 className="mt-5 text-3xl font-bold text-zinc-800">
                {delivery === 0 ? "Free" : "$4.99"}
              </h3>
              <p className="mt-2 text-zinc-600">Estimated delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="bg-green-100 text-green-700 text-lg px-5 py-3 rounded-full">
                  Your basket
                </span>
                <h2 className="mt-6 text-4xl font-bold text-zinc-800 md:text-5xl">
                  Cart Items
                </h2>
              </div>
              <a
                href="/allproducts"
                className="w-fit rounded-lg border border-green-800 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-800 hover:text-white"
              >
                Continue Shopping
              </a>
            </div>

            {cartItems.length > 0 ? (
              <div className="grid gap-5">{renderCartItems}</div>
            ) : (
              <div className="rounded-2xl bg-zinc-100 p-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-green-800">
                  <FiShoppingBag />
                </span>
                <h3 className="mt-5 text-3xl font-bold text-zinc-800">
                  Your cart is empty
                </h3>
                <p className="mx-auto mt-3 max-w-[520px] text-zinc-600">
                  Explore fresh products and add groceries to start your order.
                </p>
                <a
                  href="/allproducts"
                  className="mt-7 inline-block rounded-lg bg-green-800 px-8 py-3 font-semibold text-white transition hover:bg-green-900"
                >
                  Shop Products
                </a>
              </div>
            )}
          </div>

          <aside className="sticky top-28 rounded-2xl bg-zinc-100 p-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-3xl font-bold text-zinc-800">
                Order Summary
              </h2>

              <form className="mt-6 flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 focus-within:border-green-800">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="h-10 flex-1 bg-transparent text-zinc-800 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-green-800 px-5 py-2 font-semibold text-white transition hover:bg-green-900"
                >
                  Apply
                </button>
              </form>

              <div className="mt-7 grid gap-4 text-zinc-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold">
                    {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-semibold text-green-800">
                    -${discount.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-zinc-800">Total</span>
                  <span className="text-3xl font-bold text-green-800">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-green-700 to-green-800 px-8 py-3 text-lg font-semibold text-white transition hover:to-green-600 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={cartItems.length === 0}
                >
                  <FiShoppingBag />
                  Checkout
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Cart;
