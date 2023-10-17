'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inmuebles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inmuebles.hasMany(models.Images, {
        foreignKey: 'id_inmueble',
        as: 'imagenes',
      })
      // define association here
    }
  }
  Inmuebles.init({
    tipo: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    ambientes: DataTypes.INTEGER,
    superficie: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    propietario: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Inmuebles',
  });
  return Inmuebles;
};