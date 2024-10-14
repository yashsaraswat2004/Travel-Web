import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// ROUTER
import authrouter from "./router/authRouter.js";
import userrouter from "./router/userRouter.js";
import destinationrouter from "./router/destinationRouter.js";
import bookingrouter from "./router/bookingRoutes.js"
import forgotPasswordRoute from "./router/forgetPasswordrouter.js"
import adminRouter from "./router/adminRouter.js";
import paymentRouter from "./router/paymentRouter.js";

app.use("/auth", authrouter);
app.use("/api/user", userrouter);
app.use("/api/destination", destinationrouter);
app.use("/api/booking", bookingrouter);
app.use("/api/forgotPassword", forgotPasswordRoute);
app.use("/api/admin", adminRouter);
app.use("/api/payment", paymentRouter)

export { app };
