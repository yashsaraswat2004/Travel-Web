import PropTypes from "prop-types";

export default function EasyBooking({ src, title, description }) {
  return (
    <div className="max-w-sm mt-10 ml-5 mr-5 border border-custom-pink rounded-2xl p-6 bg-white">
      <div className="flex justify-center mb-4">
        <img className="h-16 w-16 text-blue-600" src={src}></img>
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-black text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-center mt-2">
        {description}
      </p>
    </div>
  );
}

EasyBooking.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
