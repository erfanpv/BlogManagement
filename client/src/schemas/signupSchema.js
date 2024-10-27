import { z } from "zod";

const signupSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .refine((val) => val.trim().length > 0, "Full Name cannot be just spaces"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  designation: z
    .string()
    .min(1, "Designation is required")
    .refine(
      (val) => val.trim().length > 0,
      "Designation cannot be just spaces"
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine((val) => val.trim().length > 0, "Password cannot be just spaces"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

export default signupSchema;
