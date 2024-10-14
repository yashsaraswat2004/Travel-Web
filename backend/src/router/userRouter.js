import express from "express";
import { addUserFavoriteDestination, getFavoriteDestinationById, getUserFavoriteDestination, userProfile } from "../controller/userConrtoller.js";
import authenticate from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/profile", authenticate, userProfile)
router.put("/put/:id", authenticate, addUserFavoriteDestination);
router.get("/favorites", authenticate, getUserFavoriteDestination);
router.get("/favorites/:id", authenticate, getFavoriteDestinationById);

export default router;