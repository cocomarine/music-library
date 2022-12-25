const express = require('express');

const albumController = require('../controllers/album');

const albumRoute = express.Router();
albumRoute.post('/', albumController.createAlbum);
albumRoute.get('/', albumController.getAllAlbums);

module.exports = albumRoute;