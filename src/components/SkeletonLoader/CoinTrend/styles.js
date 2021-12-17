import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  to {
    background-position: 200%;
  }
`;

const linearBackgroundAnimate = css`
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

export const Container = styled.div`
  width: 29.7rem;
  height: 18rem;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 10px;
  padding: 1.8rem 2rem;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.3) 80%
  ) rgba(255, 255, 255, .5);
  background-position: -25%;
  background-size: 90vw;
  background-repeat: repeat-y;

  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  animation: ${shine} 2s infinite ease;
  & + & {
    margin-left: 1rem;
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 1.8rem 0;
    background: ${({ theme }) => theme.colors.main.cardBackground};

  }

  .wrapper-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .image {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      ${linearBackgroundAnimate};
    }
  }

  .fill-width {
    width: 50%;
    height: 3rem;
    border-radius: .8rem;
    ${linearBackgroundAnimate};

  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5.6rem;

    .price-wrapper {
      width: 100%;

      .fill-width {
        width: 90%;
        height: 2.5rem;
        border-radius: .4rem;

        :first-child {
          margin-bottom: .8rem;
        }
      }
    }

    .fill {
      width: 10rem;
      height: 5rem;
      ${linearBackgroundAnimate};
      border-radius: .8rem;
    }
  }
`;
