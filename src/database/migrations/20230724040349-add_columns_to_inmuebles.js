'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('inmuebles', 'tipo', {
      type: Sequelize.STRING,
      allowNull: false 
    });

    await queryInterface.addColumn('inmuebles', 'ambientes', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

    await queryInterface.addColumn('inmuebles', 'superficie_log', {
      type: Sequelize.DECIMAL(9,6),
      allowNull: false
    });

    await queryInterface.addColumn('inmuebles', 'superficie_lat', {
      type: Sequelize.DECIMAL(9, 6),
      allowNull: false 
    });

    await queryInterface.addColumn('inmuebles', 'precio_por_dia', {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false 
    });

    await queryInterface.addColumn('inmuebles', 'medida', {
      type: Sequelize.DECIMAL,
      allowNull: false 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('inmuebles', 'tipo');
    await queryInterface.removeColumn('inmuebles', 'ambientes');
    await queryInterface.removeColumn('inmuebles', 'superficie_log');
    await queryInterface.removeColumn('inmuebles', 'superficie_lat');
    await queryInterface.removeColumn('inmuebles', 'precio_por_dia');
    await queryInterface.removeColumn('inmuebles', 'medida');
  }
};
