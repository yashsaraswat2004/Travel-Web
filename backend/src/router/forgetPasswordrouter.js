import express from "express";
import { recoverPassword, resetPassword } from "../controller/forgetPasswordController.js";

const router = express.Router();


router.post("/recoverPassword",recoverPassword);
router.post("/resetPassword",resetPassword);

export default router;