import express from "express"
import { getAllDestinations, getDestinationById, searchDestinations } from "../controller/destinationController.js";

const router = express.Router();

router.get("/", searchDestinations)
router.get("/id/:id", getDestinationById)
router.get("/alldestinations", getAllDestinations)

export default router;