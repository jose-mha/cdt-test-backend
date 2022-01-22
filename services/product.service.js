const { models } = require('../libs/sequelize');

class ProductService {
  constructor() {}

  async create() {}

  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne() {}

  async update() {}

  async delete() {}
}

module.exports = ProductService;
