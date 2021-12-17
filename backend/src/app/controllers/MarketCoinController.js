/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const axios = require('axios').default;
const MarketCoinsRepository = require('../repositories/MarketCoinsRepository');

const instance = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  // sandbox-api.coinmarketcap.com || pro-api.coinmarketcap.com
  headers: {
    'X-CMC_PRO_API_KEY': process.env.BACKEND_SECRET_KEY_MARKET_COIN_CAP,
    'Access-Control-Max-Age': '8600',
  },
});

class MarketCoinController {
  async indexLatest(request, response) {
    const { limit, page } = request.query;

    const { data: { data } } = await instance.get(`/cryptocurrency/listings/latest?start=${page}&limit=${limit}`);

    const cryptos = data.map(({
      id, name, symbol, slug, quote,
    }) => ({
      id,
      name,
      symbol,
      slug,
      quote,
    }));

    response.json(cryptos);
  }

  async showCategory(request, response) {
    const { limit, page } = request.query;
    const { name: categoryName } = request.params;

    const id = await MarketCoinsRepository.findByName(categoryName);

    const { data: { data: category } } = await instance.get(`/cryptocurrency/category?id=${id}&start=${page}&limit=${limit}`);

    const {
      id: _id,
      name,
      coins,
    } = category;

    const cryptos = coins.map(({
      id, name, symbol, slug, quote,
    }) => ({
      id,
      name,
      symbol,
      slug,
      quote,
    }));

    response.json({
      _id,
      name,
      cryptos,
    });
  }
}

module.exports = new MarketCoinController();
