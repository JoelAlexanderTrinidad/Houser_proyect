const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// Configura la estrategia de autenticación de Facebook
passport.use(new FacebookStrategy({
    clientID: 'T301670548890811',
    clientSecret: '71f8e28b2406b604ff14add66d292db5',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes acceder a la información del perfil del usuario obtenida de Facebook
    // profile contiene la información del usuario autenticado
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = {
    passport
};
