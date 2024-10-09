import express from "express";
import { addUserFavoriteDestination, getUserFavoriteDestination, userProfile } from "../controller/userConrtoller.js";

const router = express.Router();

router.get("/profile", userProfile)
router.get("/favorites", getUserFavoriteDestination);
router.put("/put", addUserFavoriteDestination);

export default router;