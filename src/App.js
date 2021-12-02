import { ThemeProvider } from 'styled-components';
import themeDefault from './assets/styles/themes/default';
import GlobalStyle from './assets/styles/global';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
