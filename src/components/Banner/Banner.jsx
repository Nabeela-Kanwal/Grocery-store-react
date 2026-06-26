const Banner = ({ title = "Products", bgImage }) => {
  const bannerStyle = bgImage
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }
    : {};

  return (
    <div
      className="h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative"
      style={bannerStyle}
    >
      <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">
        {title}
      </h2>
      <div className="bg-black/20  absolute inset-0"></div>
    </div>
  );
};

export default Banner;
