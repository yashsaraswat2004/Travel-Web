import { getUserIdFromToken } from "../config/jwt.js";
import Destination from "../models/destinationModel.js";
import Payment from "../models/paymentModels.js";
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

const userBooking = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate({
            path: 'bookings',
            populate: {
                path: 'destination',
                model: 'destination'
            }
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user.bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error: error.message || error });
    }
}

const userPayments = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate({
            path: 'paymentInformation', 
            model: 'payment',
            populate: {
                path: 'destination',
                select: 'name description pricePerPerson'
            }
        });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({
            success: true,
            payments: user.paymentInformation
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user payments", error: error.message || error });
    }
};








const addUserFavoriteDestination = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const { id } = req.params;

        if (user.favorites.includes(id)) {
            return res.status(404).json({ message: "Destination is already in favorites" });
        }

        user.favorites.push(id);
        await user.save();

        return res.status(200).json({ message: "Destination added to favorites" });
    } catch (error) {
        console.error("Error in adding to favorites:", error); // Log the error
        return res.status(500).json({ message: "Internal server error", error });
    }
};


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

const updateUserDetails = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        if (!jwt)
            return res.status(404).json({ message: "No token is provided" })

        const userId = await getUserIdFromToken(jwt);
        if (!userId)
            return res.status(404).json({ message: "No user is found with the id came from token" })

        const { firstName, lastName, email } = req.body;
        const updates = {};
        if (firstName) updates.firstName = firstName;
        if (lastName) updates.lastName = lastName;
        if (email) {
            const existingUser = await User.findOne({ email });
            if (existingUser)
                return res.status(400).json({ message: "user already presernt with the same email" })
            updates.email = email;
        }

        if (Object.keys(updates).length === 0)
            return res.status(404).json({ message: "No fields to update" });

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updates },
            { new: true }
        )
        if (!updatedUser)
            return res.status(404).json({ message: "No user found" })

        return res.status(200).json({ message: "User updated successfully", updatedUser })
    } catch (error) {
        return res.status(404).send({ error: "token not found" })

    }
}

export { userProfile, userPayments, userBooking, updateUserDetails, addUserFavoriteDestination, getUserFavoriteDestination, getFavoriteDestinationById };