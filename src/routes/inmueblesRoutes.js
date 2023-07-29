const express = require('express');
const router = express.Router();
const inmueblesController = require('../controllers/inmueblesController');


/* inmuebles */
router.post('/', inmueblesController.crearInmueble);

module.exports = router;