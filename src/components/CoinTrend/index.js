/* eslint-disable no-unused-vars */
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  CoinInfoContainer,
  CoinInfo,
  NameCoinContainer,
  Status,
  PriceAndChange,
  ChartState,
} from './styles';

import seeMore from '../../assets/images/icons/see-more-arrow.svg';
import MarketCoinCapServices from '../../services/MarketCoinCapServices';
import LineChart from '../LineChart';

export default function CoinTrend({ coinData }) {
  const logo = MarketCoinCapServices.getLogoCrypto(coinData.id);
  const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(coinData.quote.USD.price);

  return (
    <Wrapper>
      <CoinInfoContainer>
        <CoinInfo>
          <img src={logo} alt={coinData.symbol} />
          <strong>{coinData.symbol}</strong>

          <NameCoinContainer>
            <span>{coinData.name}</span>
          </NameCoinContainer>
        </CoinInfo>

        <a href={coinData.name}>
          <img src={seeMore} alt="See More" />
        </a>
      </CoinInfoContainer>

      <div className="divider" />

      <Status className="status">
        <PriceAndChange>
          <strong>{price}</strong>
          <span>
            {coinData.quote.USD.percent_change_24h.toFixed(2)}
            %
          </span>
        </PriceAndChange>

        <ChartState>
          <LineChart
            data={[
              { x: '0', y: 0 },
              { x: '90D', y: coinData.quote.USD.percent_change_90d },
              { x: '60D', y: coinData.quote.USD.percent_change_60d },
              { x: '30D', y: coinData.quote.USD.percent_change_30d },
              { x: '7D', y: coinData.quote.USD.percent_change_7d },
              { x: '24D', y: coinData.quote.USD.percent_change_24h },
              { x: '1H', y: coinData.quote.USD.percent_change_1h },
            ]}
          />
        </ChartState>
      </Status>
    </Wrapper>
  );
}

CoinTrend.propTypes = {
  coinData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    quote: PropTypes.shape.isRequired,
    chart: PropTypes.string.isRequired,
  }).isRequired,
};
