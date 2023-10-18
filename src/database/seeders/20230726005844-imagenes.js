'use strict';

const imagenes_db = require('../images/db_imagenes.json');

const imagenes_inmuebles = imagenes_db.map((imagen, index) => {
  let id_inmueble = Math.floor(index / 3) + 1;
  return {
    file: imagen.file,
    id_inmueble: id_inmueble,
    createdAt : new Date(),
    updatedAt: new Date(),
  };
});


module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Images', imagenes_inmuebles, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Images', null, {});
  }
};
