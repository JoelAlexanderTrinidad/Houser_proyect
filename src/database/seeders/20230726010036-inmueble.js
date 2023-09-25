'use strict';

const inmuebles = [
  {
      tipo: "departamento",
      ubicacion : "zona norte",
      ambientes: 3,
      superficie: 50,
      precio: 1500,
      propietario: "manuelita",
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      tipo: "casa",
      ubicacion : "zona sur",
      ambientes: 2,
      superficie: 40,
      precio: 1200,
      propietario: "backyardigans",
      disponible: false,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      tipo: "ph",
      ubicacion : "provincia",
      ambientes: 3,
      superficie: 100,
      precio: 1500,
      propietario: "manuelita",
      disponible: true,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      tipo: "departamento",
      ubicacion : "caba",
      ambientes: 3,
      superficie: 50,
      precio: 1200,
      propietario: "bob esponja",
      disponible: false,
      createdAt : new Date(),
      updatedAt : new Date(),
  },

]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Inmuebles', inmuebles, {});
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Inmuebles', null, {});
  }
};