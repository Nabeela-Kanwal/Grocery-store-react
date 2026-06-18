import { FiArrowRight, FiSend, FiShoppingBag, FiTag } from "react-icons/fi";

const buttonIcons = {
  "Shop Now": <FiShoppingBag />,
  "Shop Fresh": <FiShoppingBag />,
  "Get a Discount": <FiTag />,
  "Send Message": <FiSend />,
};

const Button = (props) => {
  const icon = buttonIcons[props.content] || <FiArrowRight />;

  return (
    <button
      className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-green-700 to-green-800 px-8 py-3 text-white
    md:text-lg text-md hover:scale-105 hover:to-green-600 transition-all duration-300
    cursor-pointer"
    >
      <span>{props.content}</span>
      <span className="text-xl">{icon}</span>
    </button>
  );
};

export default Button;
