const express = require('express');

const artistRoute = require('./routes/artist');
const { albumRoute1, albumRoute2 } = require('./routes/album');
const app = express();

app.use(express.json());

app.use('/artists', artistRoute);
// app.use('/artists/:artistId/albums', albumRoute1);
app.use('/albums', albumRoute2);
app.use('/artists/:artistId/albums', (req, _res, next) => { 
    console.log('middleware', req.params); 
    req.artistId = req.params.artistId; 
    next()}, albumRoute1);

module.exports = app;
