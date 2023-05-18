const Sequelize  = require('sequelize');

const sequelize = new Sequelize('expenseapp', 'root', 'B#5266@belal', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;