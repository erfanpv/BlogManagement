import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./src/config/db.js";
import authRouter from "./src/routes/authRoutes.js"
import userRouter from "./src/routes/userRoutes.js";

const app = express();
dotenv.config();

connectDb();

app.use(cors());  
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "This route is not available." });
});

const PORT = process.env.PORT
app.listen(PORT, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);