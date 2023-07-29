const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


/* /users */
router.post('/', userController.crearUsuario);
router.put('/:id', userController.updateUsuario);
router.delete('/:id', userController.deleteUsuario)

module.exports = router;