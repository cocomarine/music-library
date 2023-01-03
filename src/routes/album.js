const express = require('express');

const albumController = require('../controllers/album');

const albumRoute1 = express.Router();
const albumRoute2 = express.Router();

albumRoute1.post('/', albumController.createAlbum);
albumRoute2.get('/', albumController.getAllAlbums);
albumRoute2.get('/:albumId', albumController.getAlbumById);
albumRoute2.put('/:albumId', albumController.updateAlbum);
albumRoute2.delete('/:albumId', albumController.deleteAlbumById);

module.exports = { albumRoute1, albumRoute2 };
