'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquileres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Alquileres.belongsTo(models.Usuarios,{
        as: 'usuarios',
        foreignKey: "id_usuario"
      })

      Alquileres.belongsTo(models.Inmuebles,{
        as: 'inmuebles',
        foreignKey: "id_inmueble"
      })
    }
  }
  Alquileres.init({
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    id_usuario: DataTypes.INTEGER,
    id_inmueble: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alquileres',
  });
  return Alquileres;
};