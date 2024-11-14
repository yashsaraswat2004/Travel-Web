import express from "express";
import { addUserFavoriteDestination, getFavoriteDestinationById, getUserFavoriteDestination, updateUserDetails, userBooking, userPayments, userProfile } from "../controller/userConrtoller.js";
import authenticate from "../middleware/authmiddleware.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/profile", authenticate, userProfile)
// router.get("/profile", verifyToken, userProfile);
router.put("/put/:id", authenticate, addUserFavoriteDestination);
router.get("/favorites", authenticate, getUserFavoriteDestination);
router.get("/bookings", authenticate, userBooking);
router.get("/favorites/:id", authenticate, getFavoriteDestinationById);
router.put("/updateuser", authenticate, updateUserDetails);
router.get("/userPayments", authenticate, userPayments);


export default router;