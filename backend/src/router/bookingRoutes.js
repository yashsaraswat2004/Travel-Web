import express from "express"
import { createBooking, findBookingId } from "../controller/bookingController.js";
import authenticate from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/create/:id", authenticate, createBooking);
router.get("/find/:id",authenticate, findBookingId);

export default router;