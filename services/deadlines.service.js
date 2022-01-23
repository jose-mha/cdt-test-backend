const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class DeadlineService {
  constructor() {}

  async create(data) {
    const newDeadline = await models.Deadline.create(data);

    return newDeadline;
  }

  async find() {
    const deadline = await models.Deadline.findAll();
    return deadline;
  }

  async findOne(id) {
    const deadline = await models.Deadline.findByPk(id);

    if (!deadline) {
      throw boom.notFound('Deadline no encontrado');
    }
    return deadline;
  }

  async update(id, changes) {
    const deadline = await this.findOne(id);
    const rta = await deadline.update(changes);
    return rta;
  }

  async delete(id) {
    const deadline = await this.findOne(id);
    await deadline.destroy();
    return { id };
  }
}

module.exports = DeadlineService;
