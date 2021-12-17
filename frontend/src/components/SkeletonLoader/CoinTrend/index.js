import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SkeletonLoaderCoinTrend({ isLoading }) {
  return (
    <Container isLoading={isLoading}>
      <div>
        <div className="wrapper-row">
          <div alt="loader" className="image" />

          <div className="fill-width" />

          <div alt="loader" className="image" />
        </div>
      </div>

      <div className="divider" />

      <div className="status">
        <div className="price-wrapper">
          <div className="fill-width" />
          <div className="fill-width" />
        </div>

        <div className="fill" />
      </div>
    </Container>
  );
}

SkeletonLoaderCoinTrend.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
