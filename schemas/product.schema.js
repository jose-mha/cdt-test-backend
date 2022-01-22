const Joi = require('joi');

// const sku = Joi.string().uuid();
const id = Joi.number();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
});
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
});
const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
