/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import Header from '../../components/Header';

import {
  Container,
  HeaderTitle,
  MarketTrend,
  CoinTrendContainer,
  Ellipse,
  AboutFaetures,
  ActionToLearn,
  ContainerFeatures,
  MarketUpdateSection,
  CoinCategory,
  SearchAndFilterContainer,
  FilterContainer,
  FilterBy,
  SearchContainer,
  HowToGetStartedSection,
  ContentItem,
  LearnAboutCrypto,
  ArticleContainer,
  MainArticle,
  Tag,
  Footer,
} from './styles';

import search from '../../assets/images/icons/search.svg';
import userPlusFilled from '../../assets/images/icons/user-plus-filled.svg';
import creditCardFilled from '../../assets/images/icons/credit-card-filled.svg';
import currencyFilled from '../../assets/images/icons/currency-filled.svg';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import twitter from '../../assets/images/icons/twitter.svg';
import youtube from '../../assets/images/icons/youtube.svg';
import imageOne from '../../assets/images/articles/image-1.png';

import filters from './mock/filters';
import articles from './mock/articles';

import { Button, Link } from '../../components/Button';
import CoinTrend from './components/CoinTredList';
import BoxFeatureList from './components/BoxFeature/BoxFeatureList';
import TableCrypto from './components/TableCrypto';

export default function Home() {
  const maxFilters = 6;
  return (
    <Container>
      <Header />

      <section>
        <Ellipse
          justifyContent={{ left: '25%', background: '#7000FF' }}
        />

        <Ellipse
          justifyContent={{ right: '25%', background: '#FF00C7' }}
        />

        <HeaderTitle>
          <h1>Start and Build Your Crypto Portfolio Here</h1>
          <p>
            Only at CryptoCap, you can build a good portfolio and learn
            best practices about cryptocurrency.
          </p>
          <Button type="button">Get Started</Button>
        </HeaderTitle>

        <MarketTrend>
          <h5>Market Trend</h5>

          <CoinTrendContainer>
            <CoinTrend />
          </CoinTrendContainer>

        </MarketTrend>
      </section>

      <AboutFaetures>
        <Ellipse
          justifyContent={{
            top: '0',
            left: '3%',
            background: '#7000FF',
          }}
        />

        <h2>CryptoCap Amazing Faetures</h2>
        <p>Explore sensational features to prepare your best investment in cryptocurrency</p>

        <ContainerFeatures>
          <BoxFeatureList />
        </ContainerFeatures>

        <ActionToLearn>
          <div>
            <strong>New In Cryptocurrency?</strong>
            <p>
              We'll tell you what cryptocurrencies are,
              how they work and why you should own one right now. So let's do it.
            </p>
          </div>

          <Link href="/learn">Learn & Explorer Now</Link>
        </ActionToLearn>

        <Ellipse
          justifyContent={{
            top: '70%',
            right: '0',
            background: '#60FFE7',
          }}
        />
      </AboutFaetures>

      <MarketUpdateSection>
        <h2>Market Update</h2>

        <CoinCategory>
          <span>Cryptocurrency Categories</span>
          <SearchAndFilterContainer>
            <FilterContainer>
              {filters.map((filter, index) => (
                index < maxFilters
                  ? (
                    <FilterBy
                      key={`${filter.name}${filter.id}`}
                      type="button"
                      active={filter.active}
                    >
                      {filter.name}
                    </FilterBy>
                  )
                  : null
              ))}

              {(filters.length + maxFilters) !== 0 && (
                <FilterBy type="button">
                  See All {filters.length + maxFilters}+
                </FilterBy>
              )}
            </FilterContainer>

            <SearchContainer>
              <button type="button">
                <img src={search} alt="Search icon" />
              </button>
              <input type="search" placeholder="Search Coin" />
            </SearchContainer>
          </SearchAndFilterContainer>
        </CoinCategory>

        <TableCrypto />

        <a href="/currencies" className="see-all">See All Coins</a>
      </MarketUpdateSection>

      <HowToGetStartedSection>
        <Ellipse
          justifyContent={{
            top: '25%',
            left: '15%',
            background: '#FF00C7',
            opacity: '.2',
          }}
        />

        <Ellipse
          justifyContent={{
            top: '25%',
            left: '55%',
            background: '#7000FF',
            opacity: '.2',
          }}
        />
        <div className="about-get-started">
          <h2>How To Get Started</h2>
          <p>Simple and easy way to start your investment in cryptocurrency</p>
          <Link href="/get-started">Get Started</Link>
        </div>

        <div className="content-item-container">
          <ContentItem>
            <img src={userPlusFilled} alt="Icon user plus" />
            <div className="info">
              <strong>Create Your Account</strong>
              <p> Your account and personal identity are guaranteed safe.</p>
            </div>
          </ContentItem>

          <ContentItem>
            <img src={creditCardFilled} alt="Icon credit card" />
            <div className="info">
              <strong>Connect Bank Account</strong>
              <p>Connect the bank account to start transactions.</p>
            </div>
          </ContentItem>

          <ContentItem>
            <img src={currencyFilled} alt="Icon currency" />
            <div className="info">
              <strong>Start Build Portfolio</strong>
              <p>Buy and sell popular currencies and keep track of them.</p>
            </div>
          </ContentItem>
        </div>
      </HowToGetStartedSection>

      <LearnAboutCrypto>
        <h2>Learn About Cryptocurrency</h2>
        <p>Learn all about cryptocurrency to start investing</p>

        <ArticleContainer>
          <MainArticle image={imageOne}>
            <h2 id="title">All about Investing in NFTs and related risks</h2>

            <Tag>CRYPTO basic</Tag>
          </MainArticle>
          {articles.map((article) => (
            <article key={`${article.id}`}>
              <img src={article.image} loading="lazy" alt="About crypto" />
              <div className="info">
                <Tag>{article.tag}</Tag>
                <a href={`/articles/${article.title.trim().replace(' ', '-')}`}>{article.title}</a>
                <p>{article.subtitle}</p>
              </div>
            </article>
          ))}
        </ArticleContainer>
        <div className="see-all-container">
          <a href="/articles" className="see-all">See All Articles</a>
        </div>
      </LearnAboutCrypto>

      <Footer>
        <div>
          <a href="/">
            <img src={logo} loading="lazy" alt="Logo crypto cap" />
          </a>
          <div className="socials">
            <a href="/instagram">
              <img src={instagram} loading="lazy" alt="Instagram" />
            </a>
            <a href="/facebook">
              <img src={facebook} loading="lazy" alt="Facebook" />
            </a>
            <a href="/twiter">
              <img src={twitter} loading="lazy" alt="Twitter" />
            </a>
            <a href="/youtube">
              <img src={youtube} loading="lazy" alt="Youtube" />
            </a>
          </div>
          <span>
            {new Date().getFullYear()} CoinMarketCap. All rights reserved
          </span>
        </div>

        <div>
          <strong>About Us</strong>
          <a href="/about">About</a>
          <a href="/careers">careers</a>
          <a href="/blog">blog</a>
          <a href="/legal-&-privacy">Legal & Privacy</a>
        </div>

        <div>
          <strong>Services</strong>
          <a href="/applications">applications</a>
          <a href="/buy-crypto">Buy Crypto</a>
          <a href="/affiliate">affiliate</a>
          <a href="/institutional-services">Institutional Services</a>
        </div>
      </Footer>
    </Container>
  );
}
