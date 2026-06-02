const accentColors = {
  green: "text-green-700",
  orange: "text-orange-600",
};

const underlineColors = {
  green: "bg-green-700",
  orange: "bg-orange-500",
};

const Heading = ({ highlight, heading, accent = "green" }) => {
  const accentColor = accentColors[accent] || accentColors.green;
  const underlineColor = underlineColors[accent] || underlineColors.green;
  
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 md:text-5xl text-[2.5rem] font-bold">
        <span className={accentColor}>{highlight}</span> {heading}
      </h2>
      <div className={`w-35 h-1 ${underlineColor} ms:mt-6 mt-3 ml-auto`}></div>
    </div>
  );
};

export default Heading;
