const express = require('express');

const albumController = require('../controllers/album');

const albumRoute1 = express.Router();
const albumRoute2 = express.Router();

albumRoute1.post('/', albumController.createAlbum);
albumRoute2.get('/', albumController.getAllAlbums);
albumRoute2.get('/:albumId', albumController.getAlbumById);

module.exports = { albumRoute1, albumRoute2 };