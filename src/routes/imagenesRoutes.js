const express = require('express');
const router = express.Router();
const imagenesController = require('../controllers/imagenesController');

router.get('/:imagen', imagenesController.traerImagenes)

module.exports = router;