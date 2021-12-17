import PropTypes from 'prop-types';
import { Container } from './styles';

export default function SkeletonLoaderTableCrypto({ isLoading }) {
  return (
    <Container isLoading={isLoading}>
      <div className="wrapper-name">
        <div className="fill ranking" />
        <div alt="loader" className="image" />

        <div className="fill text" />
      </div>

      <div className="fill" />
      <div className="fill" />
      <div className="fill" />
      <div className="fill" />
    </Container>
  );
}

SkeletonLoaderTableCrypto.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
