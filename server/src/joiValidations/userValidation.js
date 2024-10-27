import Joi from "joi";

const userJoiValidation = Joi.object({
  fullName: Joi.string()
    .trim()
    .min(1)
    .pattern(/^(?!\s*$)/, { name: "not only spaces" })
    .required()
    .messages({
      "string.empty": "Full Name is required",
      "string.pattern.name": "Full Name cannot be just spaces",
    }),

  email: Joi.string()
    .trim()
    .email()
    .min(1)
    .pattern(/^(?!\s*$)/, { name: "not only spaces" })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
      "string.pattern.name": "Email cannot be just spaces",
    }),

  designation: Joi.string()
    .trim()
    .min(1)
    .pattern(/^(?!\s*$)/, { name: "not only spaces" })
    .required()
    .messages({
      "string.empty": "Designation is required",
      "string.pattern.name": "Designation cannot be just spaces",
    }),

  password: Joi.string()
    .trim()
    .min(6)
    .pattern(/^(?!\s*$)/, { name: "not only spaces" })
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
      "string.pattern.name": "Password cannot be just spaces",
    }),
});

export default userJoiValidation;
