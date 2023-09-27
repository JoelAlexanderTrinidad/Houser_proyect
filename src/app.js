const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');
const inmueblesRoutes = require('./routes/inmueblesRoutes');
const session = require('express-session');
const { passport } = require('./controllers/authController');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  // Puedes configurar otros encabezados CORS aquí si es necesario
};

app.use(cors(corsOptions));
app.use(express.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(session({
  secret: 'SECRETITO',
  resave: true,
  saveUninitialized: true
}));

app.use('/users', userRoutes);
app.use('/inmuebles', inmueblesRoutes);
app.use('/auth', authRoutes);

app.use(passport.initialize());
app.use(passport.session());

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
      res.send(`<h1>Perfil de Usuario</h1><pre>${JSON.stringify(req.user, null, 2)}</pre>`);
  } else {
      res.redirect('/');
  }
});

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('<h1>Inicio</h1><a href="/auth/facebook">Iniciar sesión con Facebook</a>');
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });