import blogDb from "../../models/blogSchema.js";
import cloudinary from "../../config/cloudinaryConfig.js";
import blogValidationSchema from "../../joiValidations/blogValidation.js";

export const createBlog = async (req, res) => {
  try {
    const userId = req.params.id

    const { error } = blogValidationSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const { title, date, category, author, image, paragraphs } = req.body;

    let userBlog = await blogDb.findOne({ userId });
    if (!userBlog) {
      userBlog = new blogDb({ userId, blogs: [] });
    }

    // Check if a blog with the same title already exists for this user
    const existingBlog = userBlog.blogs.find((blog) => blog.title === title);
    if (existingBlog) {
      return res.status(400).json({ success: false, message: "A blog with this title already exists" });
    }

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "blog-images",
    });

    // Push new blog entry to blogs array
    const newBlog = {
      title,
      date,
      category,
      author,
      image: uploadResponse.secure_url,
      paragraphs,
    };
    userBlog.blogs.push(newBlog);

    await userBlog.save();

    res.status(201).json({ success: true, message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to create blog", error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await blogDb.updateOne(
      { "blogs._id": id },
      { $pull: { blogs: { _id: id } } }
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    console.error("Error deleting blog by ID:", error);
    res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
}

export const editBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData =  req.body;

    // Use $set with positional operator to update the specified blog by its ID
    const result = await blogDb.updateOne(
      { "blogs._id": id },
      {
        $set: {
          "blogs.$.title": updateData.title,
          "blogs.$.date": updateData.date,
          "blogs.$.category": updateData.category,
          "blogs.$.author": updateData.author,
          "blogs.$.image": updateData.image,
          "blogs.$.is_listed": updateData.is_listed,
          "blogs.$.is_deleted": updateData.is_deleted,
          "blogs.$.paragraphs": updateData.paragraphs
        }
      }
    );

    // Check if the blog was updated successfully
    if (result.modifiedCount > 0) {
      res.status(200).json({ success: true, message: "Blog updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    console.error("Error updating blog by ID:", error);
    res.status(500).json({ success: false, message: "Failed to update blog" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the document that contains the blog with the specified ID in the blogs array
    const blogDocument = await blogDb.findOne({ "blogs._id": id }).populate("userId", "username email");

    // If the document is found, filter out the specific blog by its ID
    if (blogDocument) {
      const blog = blogDocument.blogs.id(id);

      // If the blog exists, return it
      if (blog) {
        res.status(200).json({ success: true, data: blog });
      } else {
        res.status(404).json({ success: false, message: "Blog not found" });
      }
    } else {
      res.status(404).json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve blog" });
  }
};

export const getAllBlogs = async (req, res,) => {
  try {
    const blogDocuments = await blogDb.find().populate("userId", "username email");
    
    const allBlogs = blogDocuments.flatMap((doc) => doc.blogs);
    
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve blogs" });
  }
};

export const getBlogsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const userBlogs = await blogDb.find({ userId }).populate('userId', 'username email'); 
    res.status(200).json({success:true,userBlogs});
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    res.status(500).json({ message: "Server error", error });
  }
};