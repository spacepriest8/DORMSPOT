import Joi from "joi";

export const createHostelSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().optional(),
  rooms: Joi.array()
    .items(
      Joi.object({
        roomNumber: Joi.string().required(),
        type: Joi.string()
          .valid("single", "double","self-contained","flat", "suite", "other")
          .required(),
        price: Joi.number().required(),
        description: Joi.string().optional(),
        amenities: Joi.object({
          airConditioning: Joi.boolean().optional(),
          privateBathroom: Joi.boolean().optional(),
          balcony: Joi.boolean().optional(),
        }).optional(),
      })
    )
    .min(1)
    .required(),
});
