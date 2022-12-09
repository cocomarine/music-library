const express = require('express');

const artistRoute = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artist', artistRoute);

module.exports = app;
