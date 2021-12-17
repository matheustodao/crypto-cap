/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { linearBackgroundAnimate, shine } from '../backgroundAnimated';

export const Container = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 80%
  ) rgba(255, 255, 255, .1);
  background-position: 0 0;
  background-size: 500px;
  background-repeat: repeat-y;
  width: 100%;
  height: 6rem;
  animation: ${shine} 1s infinite ease;
  padding-left: 3rem;
  padding-right: 7.8rem;
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};

  .fill {
    width: 7.6rem;
    height: 4rem;
    ${linearBackgroundAnimate};
    border-radius: .8rem;

    &.ranking {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 3.6rem;
    }
  }

  .wrapper-name {
    display: flex;
    align-items: center;
    width: 350px;

    .image {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      ${linearBackgroundAnimate};
      margin-right: 1.6rem;
    }

    .fill.text {
      height: 2rem;
      border-radius: .2rem;
      width: 50%;
    }
  }
`;
