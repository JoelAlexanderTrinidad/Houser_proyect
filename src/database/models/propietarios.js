'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propietarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Propietarios.belongsTo(models.Usuarios,{
        as: 'usuarios',
        foreignKey: "id_usuario"
      })

      Propietarios.belongsTo(models.Inmuebles,{
        as: 'inmuebles',
        foreignKey: "id_inmueble"
      })
    }
  }
  Propietarios.init({
    id_usuario: DataTypes.INTEGER,
    id_inmueble: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Propietarios',
  });
  return Propietarios;
};