import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.main.background};
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  width: 100%;
  border-radius: .4rem;

  div {
    > strong + strong {
      margin-left: 2.4rem;
    }
  }
`;

export const TableHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 400px repeat(4, 12.5rem);
  column-gap: 5rem;
  padding: 2.1rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.main.cardBackground};

  div:first-child {
    display: flex;
    align-items: center;

    div {
      margin-left: 4rem;
    }
  }

  div {
    strong {
      color: ${({ theme }) => theme.colors.font.secondSubtitle};
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
  }
`;

export const Rows = styled.div`
  width: 100%;
  padding: .9rem 1rem;
  padding-left: 3rem;

  .row {
    display: grid;
    grid-template-columns: 400px repeat(4, 12.5rem);
    column-gap: 5rem;

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.colors.font.secondSubtitle};
      }

    &.row-change {
      span {
        color: ${({ isNegativeChange }) => isNegativeChange && '#AE0000'};
      }
    }
    }

    .row-trade {
      width: 100%;
      justify-content: flex-start;
      button {
        padding: .4rem 2.4rem;
      }
    }

  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;

  .row-name {
    display: flex;
    align-items: center;
    margin-left: 5.1rem;

    img {
      width: 4.4rem;
      height: 4.4rem;
    }

    .image-and-name {
      display: flex;
      align-items: center;
      border-right: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
      margin-right: 1.2rem;

      span {
        margin-left: 1.2rem;
        margin-right: 1.2rem;
      }
    }
  }
`;
