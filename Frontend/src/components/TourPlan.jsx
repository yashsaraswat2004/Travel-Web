import PropTypes from "prop-types";
import BookingForm from './BookingForm';

const TourPlan = ({ itinerary }) => {
  return (
    <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl w-fit mx-auto -mt-4 px-4 py-9 bg-white shadow-lg shadow-zinc-300">
      <div className="flex flex-col md:flex-row gap-16 justify-center">
        <div className="md:w-2/4 w-3/4  md:place-self-start place-self-center space-y-8">
        <h1 className="lg:text-4xl text-3xl font-bold mb-8 justify-start">Tour Plan</h1>
          {itinerary.map((dayPlan) => (
            <div key={dayPlan._id} className="border-b border-gray-200 lg:pb-6 pb-3 last:border-b-0">
              <h2 className="lg:text-2xl text-base font-bold text-[#181E4B] mb-4">
                Day {dayPlan.day}:
              </h2>
              <p className="lg:text-base text-xs text-gray-700 leading-relaxed">
                {dayPlan.activities}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/3 w-3/4 md:mx-0 mx-auto">
          <div className="sticky top-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

TourPlan.propTypes = {
  itinerary: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      day: PropTypes.number.isRequired,
      activities: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TourPlan;
