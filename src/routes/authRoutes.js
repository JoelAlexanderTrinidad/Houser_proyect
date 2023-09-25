const express = require('express');
const passport = require('passport');

const router = express.Router();

// Ruta de inicio de sesión con Facebook
router.get('/facebook', passport.authenticate('facebook'));

// Ruta de callback después de la autenticación de Facebook
router.get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        // El usuario ha sido autenticado correctamente
        res.redirect('/profile');
    }
);

module.exports = router;