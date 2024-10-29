import * as z from "zod";

const paragraphSchema = z.object({
  title: z.string().min(1, "Paragraph title is required"),
  description: z.string().min(1, "Description is required"),
});

const blogSchema = z.object({
  title: z.string().min(1, "Blog title is required"),
  date: z.string().min(1, "Publishing date is required"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author name is required"),
  paragraphs: z.array(paragraphSchema).min(1, "At least one paragraph is required"), // At least one paragraph
});

export default blogSchema;
