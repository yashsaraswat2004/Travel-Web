import PropTypes from "prop-types";

const Gallery = ({ images }) => {
    return (
        <div className="w-full max-w-[68.8125rem] mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="aspect-w-16 aspect-h-9">
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
