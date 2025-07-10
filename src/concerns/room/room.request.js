import Joi from 'joi';

export const updateRoomSchema = Joi.object({
  roomNumber: Joi.string().optional(),
  type: Joi.string().valid('single','self-contained','double', 'flat', 'suite', 'other').optional(),
  price: Joi.number().optional(),
  description: Joi.string().optional(),
    amenities: Joi.object({
    airConditioning: Joi.boolean().optional(),
    privateBathroom: Joi.boolean().optional(),
    balcony: Joi.boolean().optional(),
  }).optional(),
});