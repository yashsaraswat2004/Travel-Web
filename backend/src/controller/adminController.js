import Booking from "../models/bookingModel.js";
import Destination from "../models/destinationModel.js";

const addDestination = async (req, res) => {
    try {
        const { name, description, country, city, pricePerPerson, facilities, numberOfNights, images, itinerary } = req.body;

        // Fix the condition to check that all required fields are present, including itinerary array and images array
        if (!name || !description || !city || !country || !pricePerPerson || !facilities || !numberOfNights || !images || !itinerary) {
            return res.status(404).json({ message: "All fiels are required" });
        }

        const { destinationId } = req.params;
        // Create a new destination with provided data
        const destination = await Destination.create({
            name,
            description,
            country,
            city,
            pricePerPerson,
            facilities,
            numberOfNights,
            images,
            itinerary
        });

        return res.status(200).json({ message: "Destination added successfully", destination });
    } catch (error) {
        // Send a meaningful error message back
        return res.status(500).json({ message: error.message });
    }
};

const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('user') 
            .populate('destination'); 

        return res.status(200).json({ message: "Bookings found", bookings });
    } catch (error) {
        return res.status(500).json({ message: "Bookings not found", error });
    }
};


// updateDestination and deleteDestination api need to be created




export { addDestination, getAllBooking };
