import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 29.7rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1.8rem 2rem;

  background: ${({ theme }) => theme.colors.main.background};
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};

  & + & {
    margin-left: 1rem;
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 1.8rem 0;
    background: ${({ theme }) => theme.colors.main.cardBackground};
  }
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
  }

  strong {
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 1.8rem;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.font.secondTitle};
    text-transform: uppercase;
    margin: 0 1.4rem;
  }
`;

export const NameCoinContainer = styled.div`
  padding: 4px 6px;
  background: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;

  span {
    color: #1D1429;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 600;
    font-size: 1rem;

  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceAndChange = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: .9rem;
    font-size: 2.4rem;
    line-height: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.font.secondTitle};
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
  }
`;

export const ChartState = styled.div`

`;
