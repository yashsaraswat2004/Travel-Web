import Destination from "../models/destinationModel.js";

const addDestination = async (req, res) => {
    try {
        const { name, description, country, city, pricePerPerson, facilities, numberOfNights, images, itinerary } = req.body;

        // Fix the condition to check that all required fields are present, including itinerary array and images array
        if (!name || !description || !city || !country || !pricePerPerson || !facilities || !numberOfNights || !images || !itinerary) {
            return res.status(404).json({ message: "All fiels are required" });
        }

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
            itinerary  // corrected spelling from 'initenary'
        });

        return res.status(200).json({ message: "Destination added successfully", destination });
    } catch (error) {
        // Send a meaningful error message back
        return res.status(500).json({ message: error.message });
    }
};

const updateDestination = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedDestination = await Destination.findByIdAndUpdate(
            id,
            { $set: updates },  // Use $set to update only the provided fields
            { new: true, runValidators: true }
        );

        if (!updatedDestination) {
            return res.status(404).json({ message: "Destination ID not found" });
        }

        res.status(200).json({
            message: "Destination updated successfully",
            destination: updatedDestination
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteDestination = async (req, res) => {
    const { id } = req.params;
    try {
        const destination = await Destination.findByIdAndDelete(id);

        if (!destination)
            return res.status(404).json({ message: "Destination ID not found" });

        res.status(200).json({ message: "Destination Deleted" })

    } catch (error) {
        res.status(500).json({ message: 'Error while deleting' });
    }
}


export { addDestination, updateDestination, deleteDestination };
