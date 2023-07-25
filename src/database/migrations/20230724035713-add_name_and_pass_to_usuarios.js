'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'name', {
      allowNull: false,
      type: Sequelize.STRING
    });

    await queryInterface.addColumn('Usuarios', 'pass', {
      allowNull: false,
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Usuarios', 'name');
    await queryInterface.removeColumn('Usuarios', 'pass');
  }
};
