/* eslint-disable consistent-return */
import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import CoinTrend from '../../../../components/CoinTrend';
import MarketCoinCapServices from '../../../../services/MarketCoinCapServices';

export default function CoinTrendList() {
  const [coins, setCoins] = useState([]);

  const cryptosTrendList = useCallback(async () => {
    try {
      const cryptos = await MarketCoinCapServices.listLatestCryptos({ limit: 4 });
      return setCoins(cryptos);
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    cryptosTrendList();
  }, [cryptosTrendList]);

  return (
    <>
      {coins.map((item) => (
        <CoinTrend key={item.id} coinData={item} />
      ))}
    </>
  );
}
