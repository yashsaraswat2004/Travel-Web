import Destination from "../models/destinationModel.js";

const searchDestinations = async (req, res) => {
    try {
        const { keyword } = req.query;

        const destinations = await Destination.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { city: { $regex: keyword, $options: 'i' } },
                { country: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ]
        });

        if (destinations.length() === 0)
            return res.status(404).json({ message: "No destinations found" });

        return res.status(200).send(destinations)
    } catch (error) {
        return res.status(500).json({ message: "error in finding destinations" });
    }
}

const getDestinationById = async (req, res) => {
    try {
        const destinationId = req.params.id;
        const destination = await Destination.findById(destinationId);

        if (!destination)
            return res.status(404).json({ message: `No destinations found with id ${destinationId} ` });

        return destination;
    } catch (error) {
        return res.status(500).json({ message: "error in finding destinations" });
    }
}

const getAllDestinations = async (req, res) => {
    try {
        const destinatons = await Destination.find();
        return res.status(200).json(destinatons);   
    } catch (error) {
        return res.status(500).json({ message: "error in finding destinations" });
    }
}

export { searchDestinations, getDestinationById, getAllDestinations };  