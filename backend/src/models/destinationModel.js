import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    country: { type: String, required: true },
    city: { type: String, required: true },
    pricePerPerson: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Destination = mongoose.model('destination', destinationSchema);
export default Destination;