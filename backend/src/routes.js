const { Router } = require('express');
const MarketCoinController = require('./app/controllers/MarketCoinController');

const routes = Router();

routes.get(`/api/market-coin-cap/cryptocurrency/latest`, MarketCoinController.indexLatestCryptocurrencies);
routes.get(`/api/market-coin-cap/cryptocurrency/category/:id`, MarketCoinController.showCategoryCryptocurrencies);

module.exports = routes;
