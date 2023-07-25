const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const port = 3000;

app.use(express.json());

app.post('/users', (req, res) => {

    console.log(req.body)

    const usuario = {
        name: req.body.userName,
        pass: req.body.password,
    }
    userController.save(usuario);
    res.send('usuario agregado');
});


app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });

