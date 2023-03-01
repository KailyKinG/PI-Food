
const { DataTypes } = require('sequelize');
// const { conn } = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Diets', {
    id: {
     type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};