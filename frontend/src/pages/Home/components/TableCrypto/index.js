import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TableHeader,
  Rows,
  FirstRow,
} from './styles';

import { Button } from '../../../../components/Button';

import MarketCoinCapServices from '../../../../services/MarketCoinCapServices';
import LineChart from '../../../../components/LineChart';
import SkeletonLoaderTableCrypto from '../../../../components/SkeletonLoader/TableCrypto';

export default function TableCrypto({ category }) {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function formatCurrency(country, currency, value) {
    return new Intl.NumberFormat(country, { style: 'currency', currency }).format(value);
  }
  const cryptosList = useCallback(async () => {
    try {
      setCoins([]);
      setIsLoading(true);

      if (category.toLowerCase() !== 'popular') {
        const { cryptos } = await MarketCoinCapServices.listCategory(category, { limit: 7 });
        return setCoins(cryptos);
      }

      const cryptos = await MarketCoinCapServices.listLatestCryptos({ limit: 7 });
      return setCoins(cryptos);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    cryptosList();
  }, [cryptosList]);

  return (
    <Container>
      <TableHeader>
        <div>
          <strong>NO</strong>
          <div>
            <strong>NAME</strong>
          </div>
        </div>

        <div>
          <strong>LAST PRICE</strong>
        </div>
        <div>
          <strong>CHANGE</strong>
        </div>

        <div>
          <strong>MARKET STATS</strong>
        </div>

        <div>
          <strong>TRADE</strong>
        </div>
      </TableHeader>

      {[...Array(7).keys()].map((item) => (
        <SkeletonLoaderTableCrypto key={item + 1} isLoading={isLoading} />
      ))}
      {coins.map((coin, index) => (
        <Rows isNegativeChange={coin.quote.USD.percent_change_24h.toFixed(2) < 0}>
          <div className="row">
            <FirstRow className="row-ranking">
              <span>{index + 1}</span>

              <div className="row-name">
                <div className="image-and-name">
                  <img src={MarketCoinCapServices.getLogoCrypto(coin.id)} loading="lazy" alt={`${coin.name} Logo`} />
                  <span>{coin.name}</span>
                </div>
                <span>{coin.symbol}</span>
              </div>
            </FirstRow>

            <div className="row-price">
              <span>{formatCurrency('en-US', 'USD', coin.quote.USD.price)}</span>
            </div>

            <div className="row-change">
              <span>
                {coin.quote.USD.percent_change_24h.toFixed(2)}
                %
              </span>
            </div>

            <div className="row-stats">
              <LineChart
                data={[
                  { x: '0', y: 0 },
                  { x: '24D', y: coin.quote.USD.percent_change_24h },
                  { x: '1H', y: coin.quote.USD.percent_change_1h },
                ]}
              />
            </div>

            <div className="row-trade">
              <Button type="button">Trade</Button>
            </div>
          </div>
        </Rows>
      ))}

    </Container>
  );
}

TableCrypto.propTypes = {
  category: PropTypes.string,
};

TableCrypto.defaultProps = {
  category: null,
};
