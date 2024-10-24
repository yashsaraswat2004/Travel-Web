import PropTypes from "prop-types";

const TourPlan = ({ itinerary }) => {
  return (
    <div className="ml-[5rem] mt-[3rem]">
      <div className="">
        <h1 className="text-4xl font-Poppins mt-5 ml-5">Tour Plan</h1>
        <div className="flex flex-col gap-4 ml-10 mt-5 p-5 w-[50%] justify-center items-center">
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
      </div>
    </div>
  );
};

TourPlan.propTypes = {
  itinerary: PropTypes.array,
};

export default TourPlan;
