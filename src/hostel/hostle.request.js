import Joi from 'joi';

export const hostelSchema = Joi.object({
  propertyName: Joi.string().min(3).required(),
  propertyType: Joi.string().valid('single', 'self-contained', 'shared', 'flat').required(),
  location: Joi.object({
    state: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
  }).required(),
  price: Joi.number().positive().required(),
  paymentDuration: Joi.string().valid('monthly', 'yearly').required(),
  amenities: Joi.object({
    wifi: Joi.boolean().default(false),
    powerSupply: Joi.boolean().default(false),
    kitchen: Joi.boolean().default(false),
    water: Joi.boolean().default(false),
    furnished: Joi.boolean().default(false),
    ensuite: Joi.boolean().default(false),
  }).required(),
  photos: Joi.array().items(Joi.string()).min(1).required(),
  contact: Joi.object({
    phone: Joi.string().trim().required(),
    whatsapp: Joi.string().trim().optional().allow('', null),
    email: Joi.string().email().required(),
  }),
  owner: Joi.string().required(),

});
