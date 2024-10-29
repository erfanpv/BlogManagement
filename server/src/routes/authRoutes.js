import express from "express";
import { userLogin, refreshToken, userSignUp, adminLogin } from "../controllers/authControllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", userSignUp);
authRouter.post("/login", userLogin);
authRouter.post("/admin/login", adminLogin);
authRouter.post("/refresh-token", refreshToken);

export default authRouter;
