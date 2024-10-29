import blogDb from "../../models/blogSchema.js";
import userDb from "../../models/userSchema.js"

// Get the all Blogs
export const getAllBlogs = async (req, res,) => {
  try {
    const blogs = await blogDb.find();
    return res.status(200).json({success:true, message: "Data fetched", data: blogs });
  } catch (error) {
    return res.status(400).json({success:false, message: `iUnexpected error ${error.message}`});
  }
};

// Get the all Users
export const getAllUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 

  try {
    const skip = (page - 1) * limit;

    const users = await userDb.find({ role: { $ne: "admin" } })
      .skip(skip) 
      .limit(limit);

    const totalUsers = await userDb.countDocuments({ role: { $ne: "admin" } });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }

    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalUsers: totalUsers,
        limit: limit,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: `Bad request: ${error.message}` });
  }
};

//block and unblock users
export const toggleBlockandUnblock = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userDb.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const newStatus = !user.is_blocked;
    await userDb.findByIdAndUpdate(userId, { is_blocked: newStatus });

    const message = newStatus ? "User blocked successfully" : "User unblocked successfully";

    return res.status(200).json({ success: true, message });
  } catch (error) {
    res.status(500).send({ success: false, message: `Internal Server Error: ${error.message}` });
  }
};

