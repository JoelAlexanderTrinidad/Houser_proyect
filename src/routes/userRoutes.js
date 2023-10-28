const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


/* /users */
router.post('/', userController.crearUsuario);
router.put('/:id', userController.updateUsuario);
router.delete('/:id', userController.verifyToken ,userController.deleteUsuario);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/register', userController.crearUsuario);

module.exports = router;