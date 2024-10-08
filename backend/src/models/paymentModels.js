import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'booking',
        required: true
    },
    paymentId: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
});

const Payment = mongoose.model('payment_information', paymentSchema);
export default Payment;