import Joi from "joi";

const blogValidationSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  category: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string().uri().required(),
  is_listed: Joi.boolean().optional(),
  is_deleted: Joi.boolean().optional(),
  paragraphs: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
      })
    )
    .min(1)
    .required(),
});

export default blogValidationSchema
