'use strict';

const users = [
  {
    name: "admin",
    surname : "admin",
    email : "admin@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 1,
    createdAt: new Date(),
  },
  {
    name: "Eric",
    surname : "Mena",
    email : "menaericdaniel@gmail.com",
    password : bcryptjs.hashSync("123123",10),
    rolId : 2,
    createdAt: new Date(),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
