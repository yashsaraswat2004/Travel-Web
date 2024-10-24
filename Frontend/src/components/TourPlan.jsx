import PropTypes from "prop-types";
import TravelForm from "./OrderForm/Form";

const TourPlan = ({ itinerary }) => {
  return (
    <div className="ml-[5rem] mt-[3rem]">
      <h1 className="text-4xl font-Poppins mt-5 ml-5">Tour Plan</h1>
      <div className="flex">
        <div className="flex flex-col gap-4 w-[60%] ml-10 mt-5 p-5 justify-center items-start">
          {itinerary.map((dayPlan) => (
            <div key={dayPlan._id} className="flex flex-col gap-2">
              <div className="flex gap-5">
                <p className="font-bold text-2xl font-Poppins text-[#181E4B]">
                  Day {dayPlan.day} :
                </p>
              </div>
              <p className="text-sm text-[#181E4B]">{dayPlan.activities}</p>
            </div>
          ))}
        </div>
        <div className="absolute ml-[55rem] mt-0 shadow-lg">
          <TravelForm />
        </div>
      </div>
    </div>
  );
};

TourPlan.propTypes = {
  itinerary: PropTypes.array,
};

export default TourPlan;
