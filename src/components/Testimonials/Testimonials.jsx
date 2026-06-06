import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="py-5">
          <button>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
