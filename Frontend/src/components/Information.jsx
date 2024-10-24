import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import TravelForm from "../components/OrderForm/Form";
const Information = ({
  name,
  price,
  description,
  city,
  facilities,
  nights,
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-[49rem] h-[67.96rem] rounded-md pt-[2.625rem] shadow-xl mt-5">
        <div className="flex w-[40rem] gap-10 mt-[1.625rem] ml-[1.625rem]">
          <div className="flex flex-col ml-[1.625rem]">
            <h1 className="text-4xl font-Poppins">{name}</h1>
            <div className="flex w-[12rem] gap-1">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <p className="text-sm font-Poppins text-[#7D7D7D] ml-2">
                {" "}
                (12 Reviews)
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[20rem]">
            <p className="text-3xl font-Poppins text-[#ff6b4e] w-[10rem] ">
              ₹ {price}{" "}
            </p>
            <p className="text-md font-Poppins text-[#7D7D7D] w-[10rem]">
              / Per Person
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[40rem] ml-[1.925rem] mt-[1.625rem]">
          <p className="text-sm font-Poppins text-justify">{description}</p>
        </div>
        <div className="w-[40rem] h-[40rem] ml-[1.625rem] mt-[1.625rem] flex flex-col gap-2 px-[1.625rem] py-[2rem]">
          <div className="flex gap-[17.3rem] font-Poppins">
            <p className="text-[#DF6951]">Destination</p>
            <p className="">{city}</p>
          </div>
          <div className="flex gap-[18.2rem] font-Poppins">
            <p className="text-[#DF6951]">Total Plan</p>
            <p className="">
              {nights} Nights & {nights + 1} Days
            </p>
          </div>
          <div className="flex gap-[18rem] font-Poppins">
            <p className="text-[#DF6951]">Departure</p>
            <p className="">
              Currently our services are from KOLKATA, PUNE, DELHI, BANGALORE
            </p>
          </div>
          <div className="flex gap-[15.5rem] font-Poppins">
            <p className="text-[#DF6951]">Departure Time</p>
            <p className="">7:30 PM IST</p>
          </div>
          <div className="flex gap-[19rem] font-Poppins">
            <p className="text-[#DF6951]">Facilities</p>
            <p className="">{facilities}</p>
          </div>

          <div className="flex gap-[18.5rem] font-Poppins">
            <p className="text-[#DF6951]">Inclusions</p>
            <p className="">Breakfast, Lunch, Dinner</p>
          </div>
          <div className="flex gap-[18.3rem] font-Poppins">
            <p className="text-[#DF6951]">Exclusions</p>
            <p className="">Any Private Expenses</p>
          </div>
        </div>
      </div>
      <div className="">
        <TravelForm />
      </div>
    </div>
  );
};

Information.propTypes = {
  _id: PropTypes.string.isRequired, // jwt is a required string prop
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  city: PropTypes.string,
  facilities: PropTypes.string,
  nights: PropTypes.number,
};

export default Information;
