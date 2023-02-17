
const { DataTypes } = require('sequelize');
// const { conn } = require('../db');

// conn.define('Diets', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });


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