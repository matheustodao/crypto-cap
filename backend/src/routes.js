const { Router } = require('express');
const MarketCoinController = require('./app/controllers/MarketCoinController');

const routes = Router();

routes.get('/api/market-coin-cap/cryptocurrency/latest', MarketCoinController.indexLatest);
routes.get('/api/market-coin-cap/cryptocurrency/category/:name', MarketCoinController.showCategory);

module.exports = routes;
