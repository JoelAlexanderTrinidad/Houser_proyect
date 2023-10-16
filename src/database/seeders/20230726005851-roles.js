'use strict';

const roles = [
  {
    name: "propietario",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "cliente",
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", roles, {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  }
};
