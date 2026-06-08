import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end py-5 gap-x-3">
          <button className="testimonial-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-700 hover:to-green-800 hover:text-white cursor-pointer transition-colors">
            <IoIosArrowBack />
          </button>

          <button className="testimonial-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-700 hover:to-green-800 hover:text-white cursor-pointer transition-colors">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover outline-2 outline-green-700 outline-offset-4"
                  />
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <div className="flex items-center gap-1 text-yellow-500 mt-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <span className="text-green-700 font-bold ml-2">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-600 leading-7">{item.para}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Ayesha Khan",
    profession: "Home Baker",
    rating: 4.5,
    para: "The vegetables arrive crisp, the dairy is always fresh, and checkout takes barely a minute. It has made weekly grocery runs so much easier.",
    image: Customer1,
  },

  {
    id: 2,
    name: "Michael Brown",
    profession: "Restaurant Owner",
    rating: 4.5,
    para: "I rely on consistent quality, especially for produce and seafood. Their selection is dependable and the delivery team is always on time.",
    image: Customer2,
  },

  {
    id: 3,
    name: "Sofia Martinez",
    profession: "Nutrition Coach",
    rating: 4.5,
    para: "The variety of fruits, greens, and pantry staples is excellent. I recommend it to clients who want healthy food without the usual hassle.",
    image: Customer3,
  },

  {
    id: 4,
    name: "Daniel Lee",
    profession: "Busy Parent",
    rating: 4.5,
    para: "Ordering after work and receiving everything neatly packed has been a lifesaver. The prices are fair and substitutions are handled thoughtfully.",
    image: Customer4,
  },

  {
    id: 5,
    name: "Emma Wilson",
    profession: "Food Blogger",
    rating: 4.5,
    para: "The ingredients look beautiful in recipes and taste even better. I especially love the fresh fruit and dairy sections.",
    image: Customer5,
  },
];
