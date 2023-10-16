'use strict';

const bcryptjs = require('bcryptjs');

const usuarios = [
  {
    name: "Dai",
    password : bcryptjs.hashSync("123123",10),
    email : "dai@gmail.com",
    id_rol : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Joel",
    password : bcryptjs.hashSync("123123",10),
    email : "joel@gmail.com",
    id_rol : 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', null, {});
  }
};
