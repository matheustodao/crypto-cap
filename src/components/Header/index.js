import {
  Container,
  NavBar,
  Navigation,
  Route,
  LanguageAndCTA,
  Language,
} from './styles';

import logo from '../../assets/images/logo.svg';
import world from '../../assets/images/icons/world.svg';

const navigation = [
  {
    name: 'Home',
    active: true,
    to: '/',
  },

  {
    name: 'Businesses',
    active: false,
    to: '/businesses',
  },

  {
    name: 'Trade',
    active: false,
    to: '/trade',
  },

  {
    name: 'Market',
    active: false,
    to: '/market',
  },

  {
    name: 'Learn',
    active: false,
    to: '/learn',
  },
];

export default function Header() {
  return (
    <Container>
      <NavBar>
        <div id="logoContainer">
          <img src={logo} alt="Crypto cap" />
        </div>

        <Navigation>
          <ul>
            {navigation.map((item) => (
              <Route key={(Math.random() * 1000).toFixed(0)} active={item.active}>
                <a href={item.to}>{item.name}</a>
              </Route>
            ))}
          </ul>
        </Navigation>

        <LanguageAndCTA>
          <Language>
            <img className="globeWorld" src={world} alt="Language" />
            <select>
              <option defaultValue="en">EN</option>
            </select>
          </Language>

          <a className="button" href="/sign-in">Login</a>
        </LanguageAndCTA>
      </NavBar>
    </Container>
  );
}
