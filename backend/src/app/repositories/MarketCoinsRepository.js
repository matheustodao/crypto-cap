/* eslint-disable no-unused-vars */
const axios = require('axios').default;

class MarketCoinsRepository {
  async findByName(name) {
    // Funciona, mas como estou usando creditos limitados
    // const { data: cryptos } = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
    //   headers: {
    //     'X-CMC_PRO_API_KEY': process.env.BACKEND_SECRET_KEY_MARKET_COIN_CAP,
    //     'Content-Type': 'application/json',
    //   },
    // });

    const cryptos = {
      data: [
        {
          id: '6053dfb66be1bf5c15e865ee',
          name: 'metaverse',
        },

        {
          id: '6051a82266fc1b42617d6dc2',
          name: 'Entertainment',
        },

        {
          id: '6051a80666fc1b42617d6d9e',
          name: 'Energy',
        },

        {
          id: '6051a82166fc1b42617d6dc1',
          name: 'Gaming',
        },

        {
          id: '6051a82666fc1b42617d6dc8',
          name: 'Music',
        },
      ],
    };

    const [{ id, name: cryotoName }] = cryptos.data.filter((category) => (
      category.name.toLowerCase() === name.toLowerCase()
    ));
    console.log(cryotoName);
    return id;
  }
}

module.exports = new MarketCoinsRepository();
