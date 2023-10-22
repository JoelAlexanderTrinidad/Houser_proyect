const express = require('express');
const router = express.Router();
const inmueblesController = require('../controllers/inmueblesController');
const { subirImg } = require('../middlewares/subirImagenes');


/* inmuebles */
router
    .post('/', subirImg.array('file'),inmueblesController.crearInmueble)
    .put('/:id', inmueblesController.modificarInmueble)
    .delete('/:id', inmueblesController.eliminarInmueble)
    .get('/buscar', inmueblesController.buscarInmueble)
    .get('/:id', inmueblesController.detalleInmueble)
    .patch('/reservar/:id', inmueblesController.reservar)
    .patch('/cancelarReserva/:id', inmueblesController.cancelarReserva)

module.exports = router;