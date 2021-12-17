import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 29.6rem;
  max-height: 34.3rem;
  height: 100%;
  padding: 4rem 2.8rem;
  backdrop-filter: blur(200px);
  border-radius: 1.8rem;
  border: 1px solid ${({ theme }) => theme.colors.main.secondary};

  & + & {
    margin-left: 2.4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3.8rem;

    .featureImage {
      width: 8rem;
      height: 8rem;
      margin-bottom: 2.7rem;
    }

    strong {
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      color: ${({ theme }) => theme.colors.font.secondTitle};
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
      text-align: left;
    }

    p {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.colors.font.secondSubtitle};
      text-align: left;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.main.primary};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: .4rem;
    }
  }
`;
