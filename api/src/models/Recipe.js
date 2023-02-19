const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// const { conn } = require('../db');
// conn.define('Recipe', {
//   id:{
//     type:DataTypes.UUID,
//     primaryKey:true,
//     allowNull:false,
//     defaultValue: DataTypes.UUIDV4,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull:false,
//   },
//   image:{
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   summary: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   level: {
//     type: DataTypes.REAL,
//     allowNull: false,
//   },
//   stepbystep: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   createInDB:{
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: true,
//   }
// });


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
    type:DataTypes.UUID,
    primaryKey:true,
    allowNull:false,
    defaultValue: DataTypes.UUIDV4,
  },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    stepbystep: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
    },
    createInDB:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};
