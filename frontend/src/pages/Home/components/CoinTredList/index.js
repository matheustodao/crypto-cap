import CoinTrend from '../../../../components/CoinTrend';

import coinData from './data';

export default function CoinTrendList() {
  return (
    <>
      {coinData.map((item) => (
        <CoinTrend key={item.id} coinData={item} />
      ))}
    </>
  );
}
