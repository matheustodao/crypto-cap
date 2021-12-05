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

    h2 {
      color: ${({ theme }) => theme.colors.font.secondTitle};
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      font-weight: 700;
      font-size: 3.6rem;
      line-height: 44px;
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .see-all {
    color: ${({ theme }) => theme.colors.main.primary};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 600;
    font-size: 1.6rem;
    margin-top: 4.1rem;
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
    text-align: left;
    width: 100%;
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
  filter: blur(125px);
  opacity: .3;
  top: 5%;
  ${({ justifyContent }) => justifyContent};
`;

export const AboutFaetures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const MarketUpdateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CoinCategory = styled.div`
  width: 100%;
  margin-bottom: 3.1rem;
  span {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
  }
`;

export const SearchAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterBy = styled.button`
  padding: 1rem 1.2rem;
  border: none;
  border-radius: .6rem;
  background: ${({ theme, active }) => (active ? theme.colors.gray[200] : theme.colors.main.background)};
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  color: ${({ theme, active }) => (active ? '#211631' : theme.colors.font.secondSubtitle)};
  font-weight: ${({ active }) => (active ? 500 : 400)};
  font-size: 1.6rem;
  cursor: pointer;

  & + & {
    margin-left: 1.2rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .6rem;
  background: ${({ theme, active }) => (active ? theme.colors.gray[200] : theme.colors.main.background)};
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  padding: 1rem;

  input, button {
    border: none;
    background: none;
  }

  button {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1.6rem;
    cursor: pointer;

  }

  input {
    color: ${({ theme, active }) => (active ? '#211631' : theme.colors.font.secondSubtitle)};

    ::placeholder {
      color: ${({ theme, active }) => (active ? '#211631' : theme.colors.font.secondSubtitle)};
    }

    ::-webkit-search-cancel-button {
      display: none;
      appearance: none;
    }
  }
`;

export const HowToGetStartedSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .about-get-started {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      color: ${({ theme }) => theme.colors.font.secondSubtitle};
      font-size: 1.8rem;
      line-height: 2.8rem;
      margin-top: 1.8rem;
      margin-bottom: 4.9rem;
      max-width: 38rem;
    }

    a {
      padding: 1.3rem 5.1rem;
    }

  }

  .content-item-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

`;
export const ContentItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  border-radius: 1.8rem;
  padding: 3rem 2rem;
  min-width: 55rem;
  width: 100%;

  img {
    width: 8rem;
    height: 8rem;
    margin-right: 2.1rem;
  }

  .info {
    strong {
      color: ${({ theme }) => theme.colors.font.secondTitle};
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      font-weight: 600;
      line-height: 3rem;
      font-size: 2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.font.secondSubtitle};
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 1rem;
      width: 31.8rem;
    }
  }

  & + & {
    margin-top: 2.4rem;
  }
`;

export const LearnAboutCrypto = styled.section`
  margin-top: 19rem;
  margin-bottom: 22.6rem;
  p {
    color: ${({ theme }) => theme.colors.font.secondSubtitle};
    font-size: 1.8rem;
    line-height: 2.8rem;
    margin-top: 1.6rem;
    width: 100%;
    text-align: center;
  }

  .see-all-container {
    display: flex;
    justify-content: center;
    max-width: 126.2rem;
    margin: auto;

    @media screen and (min-width: 1442px) {
      justify-content: flex-start;
    }
  }
`;

export const MainArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3rem;
  padding-top: 22rem;
  width: 61.8rem;
  border-radius: 1.8rem;
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: cover;

  #title {
    text-align: left;
    margin-bottom: 2.2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.font.secondTitle};
    }
  }
`;

export const Tag = styled.span`
  padding: .4rem .8rem;
  border-radius: .4rem;
  border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02));

  font-weight: 500;
  line-height: 2.2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.font.secondSubtitle};
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 126.2rem;
  width: 100%;
  flex-wrap: wrap;
  gap: 2.6rem;
  margin: auto;
  margin-top: 6rem;

  @media screen and (min-width: 1442px) {
    justify-content: flex-start;
  }

  article {
    width: 29.6rem;
    border-radius: 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.main.cardBackground};
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02));
    height: 39.1rem;

    img:first-child {
      width: 100%;
      height: 19.5rem;
      border-top-left-radius: 1.8rem;
      border-top-right-radius: 1.8rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 191px;
      padding: 2rem;
      a {
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        font-weight: 600;
        line-height: 2.4rem;
        font-size: 1.6rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.pure.white};
        margin-top: 1.3rem;
      }

      p {
        line-height: 2.2rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.font.secondSubtitle};
        text-align: left;
      }
    }

  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.1rem 9rem;
  border-top: 1px solid ${({ theme }) => theme.colors.main.cardBackground};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .socials {
      margin-top: 6.5rem;
      margin-bottom: 3.2rem;
      a + a{
        margin-left: 1.2rem;
        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }

    span, a {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.font.secondSubtitle};
      line-height: 2.4rem;
    }

    a {
      text-decoration: none;
      text-transform: capitalize;
      margin-top: 2rem;
    }

    strong {
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }
`;
