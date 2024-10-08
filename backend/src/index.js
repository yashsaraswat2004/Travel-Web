import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

// ROUTER
import authrouter from "./router/authRouter.js"; // Corrected path

app.use("/auth", authrouter);

export { app };
