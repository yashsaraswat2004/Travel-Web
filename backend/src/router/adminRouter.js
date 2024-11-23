import express from "express";
import authenticate from "../middleware/authmiddleware.js";
import { addDestination, getAllBooking ,updateDestination, deleteDestination } from "../controller/adminController.js";
import adminAuthorization from "../middleware/adminMiddleware.js";

const router = express.Router()

router.post("/add-destination", authenticate, adminAuthorization, addDestination);
router.get("/bookings", getAllBooking);

// update and delete destination router 

router.delete("/delete-destination/:id", deleteDestination);

// Route to update a Destination by ID
router.put("/update-destination/:id", updateDestination);



 
export default router;