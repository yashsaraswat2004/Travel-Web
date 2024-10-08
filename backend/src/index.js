import express from "express";

const app = express();

app.arguments(express.json());

app.listen();
export { app };
