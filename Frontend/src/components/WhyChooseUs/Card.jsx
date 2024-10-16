import { FiUser } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoTodayOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({
  _id, // Add _id to the props
  src,
  Days,
  peoples,
  City,
  Country,
  DiscountedPrice,
  price,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/package/packageinfo/${_id}`);
  };

  return (
    <div className="w-[21.625rem] h-[25.45rem] flex flex-col justify-between py-1 rounded-lg hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl">
      <div className="w-[19.6875rem] h-[12.625rem] rounded-lg">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center ml-5 gap-2">
          <IoTodayOutline />
          <p>{Days} </p>
          <div className="flex items-center justify-center gap-2 ml-5">
            <FiUser />
            <p>{peoples} people Going</p>
          </div>
        </div>
        <div className="flex items-center justify-start ml-5 mt-2">
          <h1 className="text-[1.25rem] font-[700] font-poppins">{City}</h1>
        </div>
        <div className="flex items-center justify-start gap-2 ml-5">
          <SlLocationPin />
          <h1 className="text-[1.05rem] font-[400] text-[#7D7D7D] font-poppins leading-5 text-center">
            {Country}
          </h1>
        </div>
        <div className="flex items-center justify-start gap-4 mt-2">
          <h1 className="text-[#DF6951] font-[500] text-[1.5rem] font-Poppins ml-5">
            {DiscountedPrice}
          </h1>
          <h1 className="text-[1.375rem] font-[500] text-[#7D7D7D] font-Poppins  line-through">
            {price}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <button
          className="w-[8.48rem] h-[2.35rem] rounded-lg ml-5 text-lg bg-[#DF6951] text-white"
          onClick={handleClick}
        >
          View Now
        </button>
        <FaRegHeart
          size={24}
          className="hover:cursor-pointer hover:scale-105 duration-300 mr-10"
        />
      </div>
    </div>
  );
};

export default Card;

// Add _id to PropTypes validation
Card.propTypes = {
  _id: PropTypes.string.isRequired,
  src: PropTypes.string,
  Days: PropTypes.number,
  peoples: PropTypes.string,
  City: PropTypes.string,
  Country: PropTypes.string,
  DiscountedPrice: PropTypes.string,
  price: PropTypes.number,
};
