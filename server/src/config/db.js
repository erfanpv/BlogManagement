import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGODB_URL;
const dbName = process.env.dbName;

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(mongoUrl, {
      dbName: dbName,
    });
    console.log(`MongoDB running on host ${connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDb;
