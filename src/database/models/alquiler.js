'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alquiler.hasMany(models.Usuarios,
         { foreignKey: 'id_inquilino', 
         as: 'usuarios' });

      Alquiler.belongsTo(models.inmueble, 
        {
         foreignKey:'inmueble_id', 
        as: 'inmuebles'     
      })
      
      Alquiler.hasMany(models.Usuarios,
        {
          as:'usuarios',
          foreignKey:'usuarios_id'
        }
        )

    }
  };
  Alquiler.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'alquiler',
  });
  return alquiler;
};