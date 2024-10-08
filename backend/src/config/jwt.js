import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

const SECERT_KEY = process.env.SECRET_KEY;

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, SECERT_KEY, { expiresIn: "48h" })
    return token;
}

const getUserIdFromToken = (token) => {
    const user = jwt.verify(token, SECERT_KEY);
    return user.userId;
}

export { generateToken, getUserIdFromToken }