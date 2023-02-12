const express = require('express');
const placesControllers = require('../Controllers/places-controller')

// This is a router, which is a middleware function that handles routes

const router = express.Router();
router.get('/', placesControllers.getRoot);
router.get('/ers', placesControllers.getPlaces);
router.get('/juegos', placesControllers.getPlaces);
router.get('/perfiles', placesControllers.getPlaces);

router.get('/login', placesControllers.getLogin);
router.get('/register', placesControllers.getRegister);
router.get('*', placesControllers.getError404);

module.exports = router;