import { SlLocationPin } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Card = ({ _id, src, Days, City, Country, price }) => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("token");

  const handleClick = () => {
    navigate(`/package/packageinfo/${_id}`);
  };

  const handleFavorite = async () => {
    if (!jwt) {
      Swal.fire("Need to login", "", "info");
      return;
    }

    try {
      const response = await axios.put(
        `https://travel-tour-mlya.onrender.com/api/user/put/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status === 200) {
        Swal.fire("Destination added to wishlist", "", "success");
      } else if (
        response.status === 404 &&
        response.data.message === "Destination is already in favorites"
      ) {
        Swal.fire("Destination already in favorites", "", "info");
      } else {
        Swal.fire("Unexpected response from server", "", "warning");
      }
    } catch (error) {
      Swal.fire("Destination is already in favorites", "", "info");
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="xl:w-[21.625rem] md:w-56 w-56  lg:h-[25.45rem] md:h-80 h-80 flex flex-col justify-between py-1 rounded-lg hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl">
      <div className="w-full h-[12.625rem] rounded-lg">
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center ml-5 gap-2 mt-3">
          <CiClock2 size={20} />
          <p className="text-sm">{Days} Nights</p>
          <p className="text-sm">{Days + 1} Days</p>
        </div>
        <div className="flex items-center justify-start ml-5 mt-2">
          <h1 className="md:text-[1.25rem] text-lg font-[700] font-poppins">
            {City}
          </h1>
        </div>
        <div className="flex items-center justify-start gap-2 ml-5">
          <SlLocationPin />
          <h1 className="md:text-[1.05rem] text-base font-[400] text-[#7D7D7D] font-poppins leading-5 text-center">
            {Country}
          </h1>
        </div>
        <div className="flex items-center ml-5 mt-2">
          <h1 className="md:text-[1.575rem] text-xl font-[600] text-[#DF6951] font-Poppins">
            ₹ {price}
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 mt-2">
        <button
          className="md:w-[8.48rem] md:h-[2.35rem] h-7 w-24 rounded-lg ml-5 md:text-lg text-sm bg-[#DF6951] text-white"
          onClick={handleClick}
        >
          View Now
        </button>
        <FaRegHeart
          onClick={handleFavorite}
          size={24}
          className="hover:cursor-pointer hover:scale-105 duration-300 mr-10"
        />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  src: PropTypes.string,
  Days: PropTypes.number,
  City: PropTypes.string,
  Country: PropTypes.string,
  price: PropTypes.number,
};
