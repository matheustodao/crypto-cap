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
} from './styles';

import search from '../../assets/images/icons/search.svg';

import filters from './mock/filters';

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
          justifyContent={{ left: '20%', background: '#7000FF' }}
        />

        <Ellipse
          justifyContent={{ right: '15%', background: '#FF00C7' }}
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

        <a href="/currencies" id="see-all-coins">See All Coins</a>
      </MarketUpdateSection>
    </Container>
  );
}
