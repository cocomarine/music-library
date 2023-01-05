const express = require('express');

const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');
const app = express();

app.use(express.json());

app.use('/artists', artistRoute);
app.use('/artists', albumRoute);
app.use('/albums', albumRoute);

module.exports = app;
