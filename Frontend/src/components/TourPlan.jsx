import PropTypes from "prop-types";
import BookingForm from './BookingForm';

const TourPlan = ({ itinerary }) => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Tour Plan</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          {itinerary.map((dayPlan) => (
            <div key={dayPlan._id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h2 className="text-2xl font-bold text-[#181E4B] mb-4">
                Day {dayPlan.day}:
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {dayPlan.activities}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
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
