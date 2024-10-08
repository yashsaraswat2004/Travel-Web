import { getUserProfile } from "../services/authServices";

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        if (!jwt)
            return res.status(401).json({ message: "token not found" });
        const user = await getUserProfile(jwt);

        return res.status(200).send(user)
    } catch (error) {
        throw new Error(error)
    }
}

export { getUserProfile }