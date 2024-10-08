import { loginUser, registerUser } from "../services/authServices.js"
import { generateToken } from "../config/jwt.js";
import bcrypt from "bcrypt"

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        const jwt = generateToken(user._id);

        return res.status(200).send({ jwt, message: "registered " })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email);

        if (!user)
            return res.status(404).send({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.status(401).send({ message: "Invalid password" });

        const jwt = generateToken(user._id);
        return res.status(200).send({ jwt, message: "login success " })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { login, register };