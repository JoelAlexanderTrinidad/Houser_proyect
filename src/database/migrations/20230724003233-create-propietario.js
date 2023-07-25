'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Propietarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      usuarios_id: {
        type:Sequelize.INTEGER,
        references:{ 
          model:{
            tableName:'Usuarios'
          },
          key:'id'
        }
      },
      inmueble_id: {
        type:Sequelize.INTEGER,
        references:{ 
          model:{
            tableName:'Inmueble'
          },
          key:'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Propietarios');
  }
};