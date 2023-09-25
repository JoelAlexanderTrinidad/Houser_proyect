const express = require('express');
const router = express.Router();
const inmueblesController = require('../controllers/inmueblesController');


/* inmuebles */
router
    .post('/', inmueblesController.crearInmueble)
    .put('/:id', inmueblesController.modificarInmueble)
    .delete('/:id', inmueblesController.eliminarInmueble)
    .get('/buscar', inmueblesController.buscarInmueble)
    .patch('/reservar/:id', inmueblesController.reservar)
    .patch('/cancelarReserva/:id', inmueblesController.cancelarReserva)

module.exports = router;