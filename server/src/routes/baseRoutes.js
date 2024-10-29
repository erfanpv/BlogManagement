import express from "express";
import { createBlog, deleteBlog, editBlogController, getBlogById } from "../controllers/baseControllers/blogControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const baseRouter = express.Router();

baseRouter.post("/create-blog",checkAuth, createBlog);
baseRouter.delete("/blog/:id",checkAuth, deleteBlog);
baseRouter.patch("/blog/:id",checkAuth, editBlogController);
baseRouter.get("/blog/:id", getBlogById);


export default baseRouter;
