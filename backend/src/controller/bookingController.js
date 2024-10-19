import Booking from "../models/bookingModel.js";
import Destination from "../models/destinationModel.js";
import User from "../models/userModels.js";

const createBooking = async (req, res) => {
    const { id } = req.params;
    const { numberOfPeople, bookingDate } = req.body;
    try {
        const destination = await Destination.findById(id);
        if (!destination || !numberOfPeople || !bookingDate) 
            return res.status(404).json({ message: "All fields are required" });

        const totalPrice = numberOfPeople * destination.pricePerPerson;

        const booking = await Booking.create({
            destination: destination._id,
            user: req.user._id,
            numberOfPeople,
            totalPrice,
            bookingDate 
        });

        if (!booking)
            return res.status(404).json({ message: "Booking not completed" });

        const user = await User.findById(req.user._id);
        user.bookings.push(booking._id);
        await user.save();

        return res.status(200).json({ message: "Booking completed", booking });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: "There was an error while booking" });
    }
};



const findBookingId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Booking ID is required" });
        }

        const booking = await Booking.findById(id)
            .populate("user")
            .populate("destination");

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).json({ message: "Error while retrieving booking", error });
    }
};

const findBookingIdForPayment = async (id) => {
    try {
        if (!id) {
            throw new Error("ID is required");
        }

        const booking = await Booking.findById(id)
            .populate("user")
            .populate("destination");

        if (!booking) {
            return null;
        }

        return booking;
    } catch (error) {
        throw new Error("Error while retrieving booking");
    }
};

export { createBooking, findBookingIdForPayment, findBookingId }