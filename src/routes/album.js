const express = require('express');

const albumController = require('../controllers/album');

const albumRoute = express.Router();
albumRoute.post('/', albumController.createAlbum);
albumRoute.get('/', albumController.getAllAlbums);
albumRoute.get('/:albumId', albumController.getAlbumById);

module.exports = albumRoute;