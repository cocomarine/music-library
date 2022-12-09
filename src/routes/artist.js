const express = require('express');

const artistController = require('../controllers/artist');

const artistRoute = express.Router();

artistRoute.post('/', artistController.createArtist);

module.exports = artistRoute;