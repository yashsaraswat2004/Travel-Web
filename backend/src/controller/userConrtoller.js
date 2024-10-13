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

const addUserFavoriteDestination = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user)
            return res.status(404).json({ message: "user not found" })

        const { destinationId } = req.body;
        if (user.favorites.includes(destinationId))
            return res.status(404).json({ message: "destination is alrady in favorites" })

        user.favorites.push(destinationId)
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


export { userProfile, addUserFavoriteDestination, getUserFavoriteDestination };