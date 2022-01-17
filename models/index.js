// Load ORM
const Sequelize = require('sequelize');

// Environment variable to define the URL of the data base to use.
const url = process.env.DATABASE_URL || "sqlite:bd.sqlite";

const sequelize = new Sequelize(url);

const User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = sequelize;
