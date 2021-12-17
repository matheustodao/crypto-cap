import HttpClient from './utils/HttpClient';

class MarketCoinCapServices {
  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_BACKEND_URL);
  }

  async listLatestCryptos({ page = 1, limit }) {
    return this.httpClient.get(`/api/market-coin-cap/cryptocurrency/latest?page=${page}&limit=${limit}`);
  }

  async listCategory(name, { page = 1, limit }) {
    return this.httpClient.get(`/api/market-coin-cap/cryptocurrency/category/${name}?page=${page}&limit=${limit}`);
  }

  getLogoCrypto(id) {
    return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
  }
}

export default new MarketCoinCapServices();
