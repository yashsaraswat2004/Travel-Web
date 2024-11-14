import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, default: 'user', enum: ['admin', 'user'] },
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        }
    ],
    paymentInformation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment' 
    }],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'destination'
        }
    ],
    createAt: { type: Date, default: Date.now() }
})

const User = mongoose.model("user", userSchema)
export default User;