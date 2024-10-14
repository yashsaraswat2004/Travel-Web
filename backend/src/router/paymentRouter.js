import express from "express"
import { createPaymentLink, updatePaymentInfo } from "../controller/paymentController.js";
import authenticate from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/:id", authenticate, createPaymentLink);
router.get("/", authenticate, updatePaymentInfo);

export default router;