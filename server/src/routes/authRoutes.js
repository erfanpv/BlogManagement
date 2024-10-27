import express from "express";
import { login, refreshToken, userSignUp } from "../controllers/authControllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", userSignUp);
authRouter.post("/login", login);
authRouter.post("/refresh-token", refreshToken);

export default authRouter;
