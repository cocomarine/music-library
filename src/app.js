const express = require('express');
const swaggerUi = require('swagger-ui-express');

const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');
const app = express();

app.use(express.json());

const swaggerDocument = require('./swagger.json');
// const swaggerDocument = require('./openapi.json');

app.use('/artists', artistRoute);
app.use('/artists', albumRoute);
app.use('/albums', albumRoute);
app.use(
  '/api-docs', 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

module.exports = app;
