import mongoose, { mongo } from "mongoose";

const itinerarySchema = new mongoose.Schema({
    day: { type: Number, required: true },
    activities: { type: String, required: true } 
});

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    country: { type: String, required: true },
    city: { type: String, required: true },
    pricePerPerson: { type: Number, required: true },
    facilities: { type: String, required: true },
    numberOfNights: { type: Number, required: true },
    images: [{ type: String, required: true }],
    itinerary: [itinerarySchema], // corrected from 'initenary'
    createdAt: { type: Date, default: Date.now },
});

const Destination = mongoose.model('destination', destinationSchema);
export default Destination;
