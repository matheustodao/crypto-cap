import { keyframes, css } from 'styled-components';

export const shine = keyframes`
  to {
    background-position: 200%;
  }
`;

export const linearBackgroundAnimate = css`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 80%
  ) rgb(200, 200, 200);
  background-repeat: repeat-y;
  background-position: 0 0;
  background-size: 50px 500px;
  -webkit-animation: ${shine} 1s infinite;
  animation: ${shine} 1s infinite;
`;
