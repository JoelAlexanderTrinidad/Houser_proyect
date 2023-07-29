const express = require('express');
const router = express.Router();
const userController = require('../controllers/inmueblesController');


/* inmuebles */
router.post('/', userController.crearInmueble);

module.exports = router;