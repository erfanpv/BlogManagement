import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Publishing date is required"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author name is required"),
  paragraphTitle: z.string().optional(),
  description: z.string().min(1, "Description is required"),
});

export default blogSchema

