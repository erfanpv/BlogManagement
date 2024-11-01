import express from "express";
import {  getAllUsers, toggleBlockandUnblock } from "../controllers/adminControllers/adminControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const adminRouter = express.Router();


adminRouter.get("/all-users",checkAuth,getAllUsers);

adminRouter.patch("/user/:id",checkAuth,toggleBlockandUnblock);

export default adminRouter