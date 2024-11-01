import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImg: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    is_blocked: {
      type: Boolean,
      default: false,
    },
    blogs:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
    }
  },
  { timestamps: true }
);

const userDb = mongoose.model("Users", userSchema);
export default userDb;
