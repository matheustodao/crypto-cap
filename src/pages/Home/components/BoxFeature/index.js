import PropTypes from 'prop-types';

import arrow from '../../../../assets/images/icons/arrow-right.svg';
import { Container } from './styles';

export default function BoxFeature({ feature }) {
  return (
    <Container>
      <div>
        <img
          className="featureImage"
          src={feature.image}
          alt={`Feature ${feature.id}`}
        />
        <strong>{feature.title}</strong>
        <p>{feature.description}</p>
      </div>

      <a href={`/explained/${feature.title.trim().toLowerCase().replace(' ', '-')}`}>
        See explained
        <img src={arrow} alt="arrow" />
      </a>
    </Container>
  );
}

BoxFeature.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
