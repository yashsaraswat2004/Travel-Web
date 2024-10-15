import Destination from "../models/destinationModel.js";
import User from "../models/userModels.js";
import { getUserProfile } from "../services/userService.js";


const userProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];

        if (!jwt) {
            return res.status(404).send({ error: "token not found" })
        }

        const user = await getUserProfile(jwt)

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

async function verifyUser(req, res) {
    try {
        return res.status(200).json({ message: "success" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}

const addUserFavoriteDestination = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user)
            return res.status(404).json({ message: "user not found" })

        const { id } = req.params;
        if (user.favorites.includes(id))
            return res.status(404).json({ message: "destination is alrady in favorites" })

        user.favorites.push(id)
        await user.save()

        return res.status(200).json({ message: "destion is added to favorite" })
    } catch (error) {
        return res.status(500).json({ message: "error in fetching the favorite", error })
    }
}

const getUserFavoriteDestination = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('favorites');
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user.favorites);
    } catch (error) {
        res.status(500).json({ message: "Error fetching favorite destinations", error });
    }
};

const getFavoriteDestinationById = async (req, res) => {
    const { id } = req.params;
    try {
        const destination = await Destination.findById(id);
        if (!destination)
            return res.status(404).json({ message: "Destination not found" })

        res.status(200).json(destination);
    } catch (error) {
        return res.status(500).json({ message: "Error while fetching the destination" })
    }
}


export { userProfile, verifyUser, addUserFavoriteDestination, getUserFavoriteDestination, getFavoriteDestinationById };