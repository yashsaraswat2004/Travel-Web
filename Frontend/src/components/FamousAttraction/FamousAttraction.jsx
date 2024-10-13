import PropTypes from "prop-types";

function FamousAttraction({ src, city }) {
  return (
    <div className="mt-10 mb-10">
      <div className=" h-28 w-28 rounded-full flex flex-col items-center justify-center">
        <div>
          <img src={src} alt="" className="w-28 h-28" />
        </div>

        <p className="text-center text-lg font-Montserrat font-bold">{city}</p>
      </div>
    </div>
  );
}

FamousAttraction.propTypes = {
  src: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default FamousAttraction;
