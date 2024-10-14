import express from "express";
import authenticate from "../middleware/authmiddleware.js";
import { addDestination} from "../controller/adminController.js";
import adminAuthorization from "../middleware/adminMiddleware.js";

const router = express.Router()

router.post("/add-destination", authenticate, adminAuthorization, addDestination);

// update and delete destination router 

export default router;