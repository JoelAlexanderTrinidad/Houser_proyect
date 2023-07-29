const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.use(express.json());


app.use('/users', userRoutes);





app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });

