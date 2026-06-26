import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";
import AllBanner from "../../assets/all-banner.jpg";
import Basket from "../../assets/basket-full-vegetables.png";
import Dairy from "../../assets/dairy-and-eggs.png";
import Fruits from "../../assets/fruits-and-veggies.png";
import Grocery from "../../assets/grocery.png";
import Seafood from "../../assets/meat-and-seafood.png";

const Shops = () => {
  const renderShops = shops.map((shop) => (
    <article
      key={shop.id}
      className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-56 bg-zinc-100">
        <img
          src={shop.image}
          alt={shop.name}
          className="h-full w-full object-contain p-6"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm">
          {shop.badge}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-zinc-800">{shop.name}</h3>
            <p className="mt-2 flex items-start gap-2 text-zinc-600">
              <FiMapPin className="mt-1 shrink-0 text-green-700" />
              <span>{shop.address}</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-3 py-2 font-semibold text-green-800">
            <FiStar />
            <span>{shop.rating}</span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 text-sm text-zinc-600">
          <p className="flex items-center gap-2">
            <FiClock className="text-green-700" />
            <span>{shop.hours}</span>
          </p>
          <p className="flex items-center gap-2">
            <FiPhone className="text-green-700" />
            <span>{shop.phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <FiShoppingBag className="text-green-700" />
            <span>{shop.speciality}</span>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {shop.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
            >
              {service}
            </span>
          ))}
        </div>

        <a
          href={`tel:${shop.phone.replaceAll(" ", "")}`}
          className="mt-7 inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-green-700 to-green-800 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:to-green-600"
        >
          <span>Call Store</span>
          <FiArrowRight className="text-xl" />
        </a>
      </div>
    </article>
  ));

  const renderServices = services.map((service) => (
    <div
      key={service.id}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-green-700 to-green-800 text-2xl text-white">
        {service.icon}
      </span>
      <h3 className="mt-5 text-xl font-bold text-zinc-800">
        {service.title}
      </h3>
      <p className="mt-3 leading-relaxed text-zinc-600">
        {service.description}
      </p>
    </div>
  ));

  return (
    <div>
      <Banner title="Our Shops" bgImage={AllBanner} />

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="rounded-full bg-green-100 px-5 py-3 text-lg text-green-700">
              Fresh groceries near you
            </span>
            <h1 className="mt-6 max-w-[680px] text-4xl font-bold leading-tight text-zinc-800 md:text-6xl">
              Visit our trusted grocery shops for daily fresh picks.
            </h1>
            <p className="mt-5 max-w-[620px] text-lg leading-relaxed text-zinc-600">
              Find neighborhood stores stocked with crisp produce, dairy,
              seafood, pantry staples, and quick pickup counters for busy days.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.id} className="rounded-xl bg-zinc-100 p-6">
                  <h3 className="text-4xl font-bold text-green-800">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-zinc-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] rounded-2xl bg-green-50 p-8">
            <img
              src={Grocery}
              alt="Grocery bag filled with fresh products"
              className="mx-auto h-80 w-full object-contain"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-xl bg-white p-6 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
                Store Pickup
              </p>
              <h2 className="mt-2 text-3xl font-bold text-zinc-800">
                Ready in 30 minutes
              </h2>
              <p className="mt-2 text-zinc-600">
                Order essentials online and collect them from your nearest shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-20">
        <div className="max-w-[1400px] mx-auto px-10">
          <Heading highlight="Find" heading="A Shop" />
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {renderShops}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="Services" />
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {renderServices}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-10 pb-20">
        <div className="overflow-hidden rounded-2xl bg-green-800 text-white">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_0.55fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                Weekly market favorites
              </p>
              <h2 className="mt-3 max-w-[780px] text-4xl font-bold leading-tight md:text-5xl">
                Fresh counters, helpful staff, and pickup when you need it.
              </h2>
              <p className="mt-5 max-w-[650px] leading-relaxed text-green-50">
                Choose a nearby shop for produce, dairy, seafood, and pantry
                essentials packed with the same care as our online orders.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src={Basket}
                alt="Basket full of fresh vegetables"
                className="max-h-64 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shops;

const stats = [
  {
    id: 1,
    value: "6",
    label: "City shops",
  },
  {
    id: 2,
    value: "7am",
    label: "Daily opening",
  },
  {
    id: 3,
    value: "30m",
    label: "Pickup ready",
  },
];

const shops = [
  {
    id: 1,
    name: "Market Street Fresh",
    address: "128 Market Street, New York",
    hours: "Open daily, 8:00 AM - 10:00 PM",
    phone: "+1 555 014 8765",
    rating: "4.9",
    badge: "Flagship",
    speciality: "Fresh produce, dairy, and pantry essentials",
    image: Grocery,
    services: ["Pickup", "Delivery", "Bulk Orders"],
  },
  {
    id: 2,
    name: "Green Valley Shop",
    address: "42 Valley Road, Brooklyn",
    hours: "Open daily, 7:00 AM - 9:00 PM",
    phone: "+1 555 019 2210",
    rating: "4.8",
    badge: "Organic",
    speciality: "Seasonal fruits and crisp vegetables",
    image: Fruits,
    services: ["Organic", "Pickup", "Local Farms"],
  },
  {
    id: 3,
    name: "Harbor Seafood Point",
    address: "87 Harbor Lane, Queens",
    hours: "Mon to Sat, 8:00 AM - 8:00 PM",
    phone: "+1 555 017 3342",
    rating: "4.7",
    badge: "Seafood",
    speciality: "Fresh seafood and chef-ready cuts",
    image: Seafood,
    services: ["Cold Packed", "Fresh Cuts", "Preorder"],
  },
  {
    id: 4,
    name: "Morning Dairy Corner",
    address: "214 Oak Avenue, Jersey City",
    hours: "Open daily, 7:00 AM - 9:30 PM",
    phone: "+1 555 018 4428",
    rating: "4.8",
    badge: "Dairy",
    speciality: "Milk, eggs, cheese, butter, and yogurt",
    image: Dairy,
    services: ["Chilled", "Family Packs", "Pickup"],
  },
  {
    id: 5,
    name: "Fresh Basket Express",
    address: "61 Cedar Park, Hoboken",
    hours: "Open daily, 8:00 AM - 10:00 PM",
    phone: "+1 555 016 5077",
    rating: "4.6",
    badge: "Express",
    speciality: "Quick groceries for weekly essentials",
    image: Basket,
    services: ["Fast Pickup", "Daily Deals", "Delivery"],
  },
  {
    id: 6,
    name: "Neighborhood Grocery Hub",
    address: "309 Maple Square, Newark",
    hours: "Open daily, 8:00 AM - 9:00 PM",
    phone: "+1 555 013 6821",
    rating: "4.7",
    badge: "Family",
    speciality: "Produce, dairy, seafood, and pantry staples",
    image: Grocery,
    services: ["Family Packs", "Pickup", "Support"],
  },
];

const services = [
  {
    id: 1,
    title: "Store Pickup",
    description:
      "Reserve fresh groceries and collect your order from the nearest counter.",
    icon: <FiShoppingBag />,
  },
  {
    id: 2,
    title: "Fresh Counters",
    description:
      "Shop daily-stocked produce, dairy, seafood, and pantry essentials.",
    icon: <FiStar />,
  },
  {
    id: 3,
    title: "Local Delivery",
    description:
      "Select shops deliver nearby orders with careful chilled packing.",
    icon: <FiMapPin />,
  },
  {
    id: 4,
    title: "Helpful Support",
    description:
      "Call a shop for availability, substitutions, pickup timing, and orders.",
    icon: <FiPhone />,
  },
];
