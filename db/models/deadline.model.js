const { Model, DataTypes, Sequelize } = require('sequelize');

const DEADLINE_TABLE = 'deadline';

const DeadlineSchema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  installments: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  interestNormal: {
    allowNull: false,
    field: 'interest_normal',
    type: DataTypes.FLOAT,
  },
  interestPunctual: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'interest_punctual',
    defaultValue: Sequelize.NOW,
  },
};

class Deadline extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEADLINE_TABLE,
      modelName: 'Deadline',
      timestamps: false,
    };
  }
}

module.exports = { DEADLINE_TABLE, DeadlineSchema, Deadline };
