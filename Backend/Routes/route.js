const express = require('express');
const Controller = require('../Controllers/controller')

// This is a router, which is a middleware function that handles routes

const router = express.Router();
router.get('/', Controller.Root);
router.get('/ers', Controller.ers);
router.get('/juegos', Controller.Juegos);
router.get('/perfiles', Controller.Perfiles);
router.get('/noticias', Controller.Noticias);
router.get('/encuestas', Controller.Encuestas);
router.get('/nosotros', Controller.Nosotros);
router.get('/foro', Controller.Foro);

// router.get('/login', Controller.getLogin);
// router.get('/register', Controller.getRegister);
// router.get('*', Controller.getError404);

module.exports = router; 