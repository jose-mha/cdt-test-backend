const Joi = require('joi');

// const sku = Joi.string().uuid();
const id = Joi.number();
const name = Joi.string().min(3).max(15);
const installments = Joi.number();
const interestNormal = Joi.string();
const interestPunctual = Joi.string();

const createDeadlineSchema = Joi.object({
  name: name.required(),
  installments: installments.required(),
  interestNormal: interestNormal.required(),
  interestPunctual: interestPunctual.required(),
});
const updateDeadlineSchema = Joi.object({
  name: name,
  installments: installments,
  interestNormal: interestNormal,
  interestPunctual: interestPunctual,
});
const getDeadlineSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createDeadlineSchema,
  updateDeadlineSchema,
  getDeadlineSchema,
};
