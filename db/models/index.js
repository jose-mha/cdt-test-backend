const { Product, ProductSchema } = require('./product.model');
const { Deadline, DeadlineSchema } = require('./deadline.model');

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  Deadline.init(DeadlineSchema, Deadline.config(sequelize));
}

module.exports = { setupModels };
