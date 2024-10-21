import express from "express";
import authenticate from "../middleware/authmiddleware.js";
import { addDestination, getAllBooking } from "../controller/adminController.js";
import adminAuthorization from "../middleware/adminMiddleware.js";

const router = express.Router()

router.post("/add-destination", authenticate, adminAuthorization, addDestination);
router.get("/bookings", getAllBooking);

// update and delete destination router 

export default router;