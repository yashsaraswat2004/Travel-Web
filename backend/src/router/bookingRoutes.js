import express from "express"
import { createBooking, findBookingId } from "../controller/bookingController.js";
import authenticate from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", authenticate, createBooking);
router.get("/:id",authenticate, findBookingId);

export default router;