const express = require('express');

const albumController = require('../controllers/album');

const albumRoute = express.Router();
albumRoute.post('/', albumController.createAlbum);

module.exports = albumRoute;