import * as Joi from 'joi'

export const itemsSchema = {
  id: Joi.string().required().not().empty(),
  name: Joi.string().required().not().empty(),
  quantity: Joi.string().required().not().empty().pattern(/^\d+$/),
  unitPrice: Joi.string()
    .required()
    .not()
    .empty()
    .pattern(/^\d+(\.\d+)?$/),
  description: Joi.string().allow(null).empty('').optional(),
}

export const allInvoiceSchema = {
  id: Joi.string().allow(null).empty('').optional(),
  date: Joi.date().required().not().empty(),
  dueDate: Joi.date().required().not().empty(),
  description: Joi.string().allow(null).empty('').optional(),
  currency: Joi.string().allow(null).empty('').optional(),
  status: Joi.string().valid('paid', 'pending', 'draft'),
  contact: Joi.string().email().required().not().empty(),
  owner: Joi.string().required().not().empty(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  zip: Joi.string().required(),
  country: Joi.string().required(),
  name: Joi.string().required().not().empty(),
  items: Joi.array().items(Joi.object(itemsSchema)),
}
