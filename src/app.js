const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const port = 3000;

app.use(express.json());

app.post('/users', userController.crearUsuario);


app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });

