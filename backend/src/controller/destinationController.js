import Destination from "../models/destinationModel.js";

const searchDestinations = async (req, res) => {
  try {
    const { keyword } = req.query;

    const destinations = await Destination.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { city: { $regex: keyword, $options: "i" } },
        { country: { $regex: keyword, $options: "i" } },
      ],
    });

    if (destinations.length === 0)
      return res.status(404).json({ message: "No destinations found" });

    return res.status(200).send(destinations);
  } catch (error) {
    return res.status(500).json({ message: "error in finding destinations" });
  }
};

const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await Destination.findById(id);

    if (!destination)
      return res
        .status(404)
        .json({ message: `No destinations found with id ${id} ` });

    return res.status(200).json(destination);
  } catch (error) {
    return res.status(500).json({ message: "error in finding destinations" });
  }
};

const getAllDestinations = async (req, res) => {
  try {
    const destinatons = await Destination.find();
    return res.status(200).json(destinatons);
  } catch (error) {
    return res.status(500).json({ message: "error in finding destinations" });
  }
};

const getTopDestination = async (req, res) => {
  try {
    const topDestinations = await Destination.find({
      '_id': { $in: ['670bd7499e44502c01d4ed29', '673113bd060482f9314dc667', '673111df060482f9314dc420'] }
    });

    if (topDestinations.length === 0) {
      return res.status(404).json({ message: 'No top destinations found' });
    }

    res.status(200).json(topDestinations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export {getTopDestination, searchDestinations, getDestinationById, getAllDestinations };
