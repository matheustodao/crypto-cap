import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  section {
    position: relative;
    height: 100%;
    margin: 0 9rem;

    + section {
      margin-top : 13.6rem;
    }
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  z-index: -1;
  width: 65.5rem;
  height: 31.4rem;
  border-radius: 50%;
  filter: blur(250px);
  top: 5%;
  ${({ justifyContent }) => justifyContent};
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8.8rem;
  margin-bottom: 13.6rem;

  h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.colors.font.secondTitle};
    line-height: 4.4rem;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    width: 60%;
    text-align: center;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
    font-feature-settings: 'salt' on, 'liga' off;
    margin-top: 1.8rem;
    margin-bottom: 4rem;
  }

  button {
    padding: 1.6rem 5rem;
    font-size: 1.6rem;
  }
`;

export const MarketTrend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  h5 {
    font-size: 2.4rem;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.font.secondTitle};
    font-weight: 600;
  }
`;

export const CoinTrendContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
`;
