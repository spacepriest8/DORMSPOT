import Joi from 'joi';

export const paymentSchema = Joi.object({
  hostelId: Joi.string().required(),
  amount: Joi.number().positive().required(),
});
