import Booking from "../models/bookingModel.js";
import Destination from "../models/destinationModel.js";

const createBooking = async (req, res) => {
    try {
        const { destinationId, numberOfPeople } = req.body;
        if (!destinationId || !numberOfPeople) {
            return res.status(400).json({ message: "Destination ID and number of people are required" });
        }

        const destination = await Destination.findById(destinationId);
        if (!destination) {
            return res.status(400).json({ message: "Destination not found" });
        }

        const totalCost = numberOfPeople * destination.pricePerPerson;

        const booking = await Booking.create({
            user: req.userId,
            destination: destinationId,
            numberOfPeople,
        });

        return res.status(201).json({ booking, totalCost });
    } catch (error) {
        return res.status(500).json({ message: "Error while booking", error });
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


export { createBooking, findBookingId }