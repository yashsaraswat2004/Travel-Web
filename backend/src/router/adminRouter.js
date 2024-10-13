import express from "express";
import authenticate from "../middleware/authmiddleware.js";
import { addDestination, deleteDestination, updateDestination } from "../controller/adminController.js";
import adminAuthorization from "../middleware/adminMiddleware.js";

const router = express.Router()

router.post("/add-destination", authenticate, adminAuthorization, addDestination);
router.post("/update-destination/:id", authenticate, adminAuthorization, updateDestination);
router.delete("/delete-destination/:id", authenticate, adminAuthorization, deleteDestination);

export default router;