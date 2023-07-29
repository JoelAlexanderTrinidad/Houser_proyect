const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');
const inmueblesRoutes = require('./routes/inmueblesRoutes');

app.use(express.json());


app.use('/users', userRoutes);
app.use('/inmuebles', inmueblesRoutes);





app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });

