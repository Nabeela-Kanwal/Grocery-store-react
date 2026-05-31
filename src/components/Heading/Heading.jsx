const Heading = ({ highlight, heading }) => {
  
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 md:text-5xl text-[2.5rem] font-bold">
        <span className="text-green-700">{highlight}</span> {heading}
      </h2>
      <div className="w-35 h-1 bg-green-700 ms:mt-6 mt-3 ml-auto"></div>
    </div>
  );
};

export default Heading;
