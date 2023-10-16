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
      Inmuebles.belongsTo(models.Images,{
        as:'images',
        foreignKey: "id_image",
        onDelete: 'cascade'
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