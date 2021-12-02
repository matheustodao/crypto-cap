import Header from '../../components/Header';

import {
  Container,
  HeaderTitle,
  MarketTrend,
  CoinTrendContainer,
  Ellipse,
} from './styles';

import { Button } from '../../components/Button';
import CoinTrend from './components/CoinTredList';

export default function Home() {
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

      <section>
        <Ellipse
          justifyContent={{
            left: '0%',
            background: '#7000FF',
            width: '32rem',
          }}
        />

        <Ellipse
          justifyContent={{
            top: '75%',
            right: '0',
            background: '#60FFE7',
            width: '32rem',
          }}
        />

        <h2>Section 2</h2>
      </section>

    </Container>
  );
}
