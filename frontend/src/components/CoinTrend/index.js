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

export default function CoinTrend({ coinData }) {
  return (
    <Wrapper>
      <CoinInfoContainer>
        <CoinInfo>
          <img src={coinData.logo} alt={coinData.symbol} />
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
          <strong>{coinData.price}</strong>
          <span>{coinData.change}</span>
        </PriceAndChange>

        <ChartState>
          <img src={coinData.chart} alt={`Change ${coinData.change}`} />
        </ChartState>
      </Status>
    </Wrapper>
  );
}

CoinTrend.propTypes = {
  coinData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    chart: PropTypes.string.isRequired,
  }).isRequired,
};
