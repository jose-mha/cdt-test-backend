const express = require('express');

const productsRouter = require('./products.router');
const deadlinesRouter = require('./deadlines.router');

function routerAPI(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/deadlines', deadlinesRouter);
}

module.exports = routerAPI;
