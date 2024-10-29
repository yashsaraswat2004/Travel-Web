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
}) => {
  return (
    <div className="flex justify-between w-full max-w-7xl mx-auto mt-8">
      <div className="w-2/3 pr-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
            <span className="text-sm text-gray-600 ml-2">(12 Reviews)</span>
          </div>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-[#DF6951] mr-2">₹ {price}</span>
            <span className="text-sm text-gray-600">Per Person</span>
          </div>
        </div>
        <p className="text-sm mb-6">{description}</p>
        <div className="space-y-4">
          {[
            { label: "Destination", value: city },
            { label: "Total Plan", value: `${nights} Nights & ${nights + 1} Days` },
            { label: "Departure", value: "Currently our services are from KOLKATA, PUNE, DELHI, BANGALORE" },
            { label: "Departure Time", value: "7:30 PM IST" },
            { label: "Facilities", value: facilities },
            { label: "Inclusions", value: "Breakfast, Lunch, Dinner" },
            { label: "Exclusions", value: "Any Private Expenses" },
          ].map((item, index) => (
            <div key={index} className="flex">
              <span className="w-1/3 text-[#DF6951] font-semibold">{item.label}</span>
              <span className="w-2/3">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <BookingForm name={name} price={price} />
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
