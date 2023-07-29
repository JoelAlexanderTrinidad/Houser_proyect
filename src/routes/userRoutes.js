const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


/* /users */
router.post('/', userController.crearUsuario);

module.exports = router;