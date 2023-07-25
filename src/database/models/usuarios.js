'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsToMany(models.Inmueble,
         { foreignKey: 'usuario_id', 
         as:'inmuebles', 
         through:'propietario',
         otherKey:'inmueble_id'});

    }

  };
  Usuarios.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};