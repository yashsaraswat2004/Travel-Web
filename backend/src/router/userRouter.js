import express from "express";
import { addUserFavoriteDestination, getUserFavoriteDestination, userProfile } from "../controller/userConrtoller.js";
import authenticate from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/profile", authenticate, userProfile)
router.get("/favorites", authenticate, getUserFavoriteDestination);
router.put("/put", authenticate, addUserFavoriteDestination);

export default router;