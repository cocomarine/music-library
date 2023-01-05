const express = require('express');

const artistController = require('../controllers/artist');

const artistRoute = express.Router();
artistRoute.post('/', artistController.createArtist);
artistRoute.get('/', artistController.getAllArtists);
artistRoute.get('/:artistId', artistController.getArtistById);
artistRoute.put('/:artistId', artistController.updateArtist);
artistRoute.patch('/:artistId', artistController.updateArtistByPatch);
artistRoute.delete('/:artistId', artistController.deleteArtist);

module.exports = artistRoute;
