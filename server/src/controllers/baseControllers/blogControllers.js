import blogDb from "../../models/blogSchema.js";
import cloudinary from "../../config/cloudinaryConfig.js";
import blogValidationSchema from "../../joiValidations/blogValidation.js";

// Create a new Blogs
export const createBlog = async (req, res) => {
  try {
    const { error } = blogValidationSchema.validate(req.body);

    // If validation fails, send error response
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const { title, date, category, author, image, paragraphs } = req.body;

    // Check if a blog with the same title already exists
    const existingBlog = await blogDb.findOne({ title });
    if (existingBlog) {
      return res.status(400).json({success: false,message: "A blog with this title already exists",});
    }

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "blog-images",
    });


    // Create a new blog entry
    const newBlog = new blogDb({
      title,
      date,
      category,
      author,
      image: uploadResponse.secure_url,
      paragraphs,
    });

    await newBlog.save();

    res
      .status(201)
      .json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create blog", error });
  }
};


//delete blog
export const deleteBlog = async (req, res) => {
  try {
      const id = req.params.id;

      if (!id) {
          return res.status(404).json({ message: "Id not provided" });
      };

      const deleteBlog = await blogDb.findByIdAndDelete(id);

      if (!deleteBlog) {
          return res.status(404).json({ success: false, message: "Blog not found" });
      }
      return res.status(200).json({ success: true, message: "Blog deleted successfully" });

  } catch (error) {
      console.error("Error deleting blog:", error);
  }
}


export const editBlogController = async (req, res) => {
  const { id } = req.params; 
  const updatedData = req.body; 

  // Validate required fields
  const requiredFields = ['title', 'date', 'category', 'author', 'image', 'paragraphs'];
  for (const field of requiredFields) {
    if (!updatedData[field]) {
      return res.status(400).json({ message: `${field} is required` });
    }
  }

  try {
    // Find the blog by ID and update it
    const updatedBlog = await blogDb.findByIdAndUpdate(id, updatedData, {
      new: true,  
      runValidators: true,
    });

    // Check if the blog was found and updated
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Respond with the updated blog
    res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    // Handle any errors that may occur
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const getBlogById = async (req, res) => {
  try {
      const id = req.params.id;

      if (!id) {
        return res.status(404).json({success:false, message: "id not provided" });
      };

      const blog = await blogDb.findById(id);

      if (!blog) {
        return res.status(404).json({ success: false, message: "blog not found" });
      }

      return res.status(200).json({ success: true, data: blog });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
}