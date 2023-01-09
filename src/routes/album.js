const express = require('express');

const albumController = require('../controllers/album');

const albumRoute = express.Router();

albumRoute.post('/:artistId/albums', albumController.createAlbum);
albumRoute.get('/', albumController.getAllAlbums);
albumRoute.get('/:albumId', albumController.getAlbumById);
albumRoute.put('/:albumId', albumController.updateAlbum);
albumRoute.patch('/:albumId', albumController.updateAlbumByPatch);
albumRoute.delete('/:albumId', albumController.deleteAlbumById);

module.exports = albumRoute;
