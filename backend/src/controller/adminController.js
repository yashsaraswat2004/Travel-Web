import Booking from "../models/bookingModel.js";
import Destination from "../models/destinationModel.js";

const addDestination = async (req, res) => {
  try {
    const {
      name,
      description,
      country,
      city,
      pricePerPerson,
      facilities,
      numberOfNights,
      images,
      itinerary,
    } = req.body;

    if (
      !name ||
      !description ||
      !city ||
      !country ||
      !pricePerPerson ||
      !facilities ||
      !numberOfNights ||
      !images ||
      !images.length ||
      !itinerary ||
      !itinerary.length
    ) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const { destinationId } = req.params;

    // Create a new destination 
    const destination = await Destination.create({
      name,
      description,
      country,
      city,
      pricePerPerson,
      facilities,
      numberOfNights,
      images,
      itinerary,
    });

    return res
      .status(200)
      .json({ message: "Destination added successfully", destination });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("destination");

    return res.status(200).json({ message: "Bookings found", bookings });
  } catch (error) {
    return res.status(500).json({ message: "Bookings not found", error });
  }
};

// updateDestination and deleteDestination api need to be created


//delete Api
const deleteDestination = async (req, res) => {
  try {
    const deletedDestination = await Destination.deleteOne(req.params.id);
    if (!deletedDestination) return res.status(404).json({ message: 'Package not found' });
    res.status(200).json({ message: 'Package deleted successfully', package: deletedDestination });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting package', error });
  }
};

//Update Api
const updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedDestination) return res.status(404).json({ message: 'Package not found' });
    res.status(200).json({ message: 'Package updated successfully', Destination: updatedDestination });
  } catch (error) {
    res.status(500).json({ message: 'Error updating package', error });
  }
};



export { addDestination, getAllBooking, deleteDestination, updateDestination };
