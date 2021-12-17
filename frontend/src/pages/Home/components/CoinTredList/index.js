/* eslint-disable consistent-return */
import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import CoinTrend from '../../../../components/CoinTrend';
import MarketCoinCapServices from '../../../../services/MarketCoinCapServices';
import SkeletonLoaderCoinTrend from '../../../../components/SkeletonLoader/CoinTrend';

export default function CoinTrendList() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const cryptosTrendList = useCallback(async () => {
    try {
      setIsLoading(true);
      const cryptos = await MarketCoinCapServices.listLatestCryptos({ limit: 4 });
      return setCoins(cryptos);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    cryptosTrendList();
  }, [cryptosTrendList]);

  return (
    <>
      {[...Array(4).keys()].map((item) => (
        <SkeletonLoaderCoinTrend key={item + 1} isLoading={isLoading} />
      ))}

      {coins.map((item) => (
        <CoinTrend key={item.id} coinData={item} />
      ))}
    </>
  );
}
