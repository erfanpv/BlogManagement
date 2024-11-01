import express from "express";
import { createBlog, deleteBlog, editBlogController, getAllBlogs, getBlogById, getBlogsByUserId } from "../controllers/baseControllers/blogControllers.js";
import checkAuth from "../middleware/checkAuth.js";

const baseRouter = express.Router();

baseRouter.post("/create-blog/:id", createBlog);
baseRouter.delete("/blog/:id",checkAuth, deleteBlog);
baseRouter.patch("/blog/:id",checkAuth, editBlogController);
baseRouter.get("/blog/:id", getBlogById);
baseRouter.get("/blogs/:userId", getBlogsByUserId);
baseRouter.get("/all-blogs",getAllBlogs);



export default baseRouter;
