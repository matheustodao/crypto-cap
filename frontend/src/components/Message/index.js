import ReactDOM from 'react-dom';
import { Container } from './styles';

export default function Message() {
  return ReactDOM.createPortal(
    <Container>
      <h1>Ops! Your screen is small for this site.</h1>
    </Container>,
    document.getElementById('message'),
  );
}
