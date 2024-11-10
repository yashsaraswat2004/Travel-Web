import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
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
    numberOfPeople: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
    paymentDetails: {
        paymentId: { type: String, required: false },
        status: { type: String, enum: ['PENDING', 'COMPLETED'], default: 'PENDING' }
    },
    status: { type: String, enum: ['PLACED', 'CANCELLED'], default: 'PLACED' }
});

const Payment = mongoose.model('payment', paymentSchema);
export default Payment;
