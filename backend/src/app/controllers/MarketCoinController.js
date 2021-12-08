const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': process.env.BACKEND_SECRET_KEY_MARKET_COIN_CAP,
  },
});


class MarketCoinController {
  async indexLatestCryptocurrencies(request, response) {
    const { limit } = request.query;
    const { data } = await instance.get(`/cryptocurrency/listings/latest?limit=${limit || 10}`);
    return response.json(data);
  }

  async showCategoryCryptocurrencies(request, response) {
    const { limit } = request.query;
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: 'Query id is required.' })
    }

    const { data } = await instance.get(`/cryptocurrency/category?id=${id}&limit=${limit || 10}`);
    response.json(data);
  }

};

module.exports = new MarketCoinController()
