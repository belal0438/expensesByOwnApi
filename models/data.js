
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('expenses', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },

    table: {
        type: Sequelize.STRING,
        allowNull: false
    },

    menue: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;