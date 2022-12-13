const express = require('express');

const artistRoute = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRoute);

module.exports = app;
