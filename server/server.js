import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./src/config/db.js";
import authRouter from "./src/routes/authRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import baseRouter from "./src/routes/baseRoutes.js";
import adminRouter from "./src/routes/adminRoutes.js";

const app = express();
dotenv.config();

connectDb();

app.use(cors());
app.use(cookieParser());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/base", baseRouter);
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "This route is not available." });
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
