import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  section {
    position: relative;
    height: 100%;
    padding: 0 9rem;

    + section {
      margin-top : 13.6rem;
    }
  }
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
  align-items: center;
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

export const Ellipse = styled.div`
  position: absolute;
  z-index: -1;
  width: 31.5rem;
  height: 31.4rem;
  border-radius: 50%;
  filter: blur(200px);
  top: 5%;
  ${({ justifyContent }) => justifyContent};
`;

export const AboutFaetures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.font.secondTitle};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 44px;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
    font-size: 1.8rem;
    line-height: 28px;
    text-align: center;
  }
`;

export const ActionToLearn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem;
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  border-radius: 1.2rem;

  strong {
    color: ${({ theme }) => theme.colors.font.secondTitle};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 600;
    line-height: 32px;
    font-size: 2.4rem;
  }

  p {
    width: 53.6rem;
    text-align: justify;
    margin-top: 1.2rem;
  }

  a {
    padding: 1.6rem 2.4rem;
  }
`;

export const ContainerFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 12.7rem;
`;
