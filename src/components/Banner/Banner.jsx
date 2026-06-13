import React from "react";

const Banner = ({ title = "Products", bgImage }) => {
  const bannerStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }
    : {};

  return (
    <div
      className="bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center"
      style={bannerStyle}
    >
      <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default Banner;
