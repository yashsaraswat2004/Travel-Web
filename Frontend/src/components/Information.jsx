import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import BookingForm from "./BookingForm";


const Information = ({
  name,
  price,
  description,
  city,
  facilities,
  nights,
  fromValue,
  passenger
}) => {
  console.log("information passenger", passenger)
  return (
    <div className="flex flex-col md:flex-row gap-16 w-fit xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto -mt-4 py-9 justify-center bg-white shadow-lg shadow-zinc-300">
      <div className="md:w-2/4 w-3/4  md:place-self-start place-self-center">
        <div className="mb-6">
          <h1 className="lg:text-4xl text-2xl font-bold mb-2">{name}</h1>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
            <span className="text-sm text-gray-600 ml-2">(12 Reviews)</span>
          </div>
          <div className="flex items-center">
            <span className="md:text-3xl text-xl font-bold text-[#DF6951] mr-2">₹ {price}/</span>
            <span className="lg:text-sm text-xs text-gray-600">Per Person</span>
          </div>
        </div>
        <p className="lg:text-base text-xs mb-6">{description}</p>
        <div className="space-y-4 ">
          {[
            { label: "Destination", value: city },
            { label: "Total Plan", value: `${nights} Nights & ${nights + 1} Days` },
            { label: "Departure", value: "Currently our services are from KOLKATA, PUNE, DELHI, BANGALORE" },
            { label: "Departure Time", value: "7:30 PM IST" },
            { label: "Facilities", value: facilities },
            { label: "Inclusions", value: "Breakfast, Lunch, Dinner" },
            { label: "Exclusions", value: "Any Private Expenses" },
          ].map((item, index) => (
            <div key={index} className="flex ">
              <span className="w-1/3 text-[#DF6951] font-semibold lg:text-lg text-sm">{item.label}</span>
              <span className="w-2/3 lg:text-base text-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 w-3/4 md:mx-0 mx-auto">
        <BookingForm passenger={passenger} fromValue={fromValue} name={name} price={price} />
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
  passenger: PropTypes.number,
  fromValue: PropTypes.string
};

export default Information;
