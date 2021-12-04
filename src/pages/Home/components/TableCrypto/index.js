import {
  Container,
  TableHeader,
  Rows,
  FirstRow,
} from './styles';

import { Button } from '../../../../components/Button';

import coins from '../CoinTredList/data';

export default function TableCrypto() {
  return (
    <Container>
      <TableHeader>
        <div>
          <strong>NO</strong>
          <div>
            <strong>NAME</strong>
          </div>
        </div>

        <div>
          <strong>LAST PRICE</strong>
        </div>
        <div>
          <strong>CHANGE</strong>
        </div>

        <div>
          <strong>MARKET STATS</strong>
        </div>

        <div>
          <strong>TRADE</strong>
        </div>
      </TableHeader>

      {coins.map((coin, index) => (
        <Rows>
          <div className="row">
            <FirstRow className="row-ranking">
              <span>{index + 1}</span>

              <div className="row-name">
                <div className="image-and-name">
                  <img src={coin.logo} loading="lazy" alt={`${coin.name} Logo`} />
                  <span>{coin.name}</span>
                </div>
                <span>{coin.symbol}</span>
              </div>
            </FirstRow>

            <div className="row-price">
              <span>{coin.price}</span>
            </div>

            <div className="row-change">
              <span>{coin.change}</span>
            </div>

            <div className="row-stats">
              <img src={coin.chart} loading="lazy" alt="Chart State" />
            </div>

            <div className="row-trade">
              <Button type="button">Trade</Button>
            </div>
          </div>
        </Rows>
      ))}

    </Container>
  );
}
