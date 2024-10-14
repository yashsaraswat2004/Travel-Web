import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'destination',
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    bookingDate: { type: Date, default: Date.now() }
})

const Booking = mongoose.model('booking', bookingSchema);
export default Booking;

