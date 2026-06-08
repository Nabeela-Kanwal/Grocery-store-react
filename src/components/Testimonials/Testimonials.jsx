import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className=" flex justify-end py-5 gap-x-3">
          <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-700 hover:to-green-800 text-white cursor-pointer">
            <IoIosArrowBack />
          </button>

          <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-700 hover:to-green-800 text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

        {/* <div className="bg-zinc-100 rounded-xl p-8">
          <div className="flex gap-5 items-center">
            <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-green-700 outline-offset-4"></div>
            <div>
              <h5 className="text-xl font-bold">Name</h5>
              <p className="text-zinc-600">Profession</p>
              <span className="text-green-700 font-bold">Rating</span>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              consequatur molestias iste aliquam, nemo ducimus odit fugit ea
              perspiciatis quia!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur molestias iste aliquam, nemo ducimus odit fugit ea perspiciatis quia!",
    image: Customer1,
  },

  {
    id: 2,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur molestias iste aliquam, nemo ducimus odit fugit ea perspiciatis quia!",
    image: Customer2,
  },

  {
    id: 3,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur molestias iste aliquam, nemo ducimus odit fugit ea perspiciatis quia!",
    image: Customer3,
  },

  {
    id: 4,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur molestias iste aliquam, nemo ducimus odit fugit ea perspiciatis quia!",
    image: Customer4,
  },

  {
    id: 5,
    name: "John Doe",
    profession: "Software Engineer",
    rating: 4.5,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur molestias iste aliquam, nemo ducimus odit fugit ea perspiciatis quia!",
    image: Customer5,
  },
];
