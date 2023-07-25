'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inmueble extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Inmueble.belongsToMany(models.Usuarios,
          { foreignKey: 'inmueble_id', 
          as:'usuarios', 
          through:'propietario',
          otherKey:'usuario_id'});

        }

  };
  Inmueble.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inmueble',
  });
  return Inmueble;
};