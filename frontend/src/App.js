import { ThemeProvider } from 'styled-components';
import themeDefault from './assets/styles/themes/default';
import GlobalStyle from './assets/styles/global';

import Home from './pages/Home';
import Message from './components/Message';

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Message />
      <Home />
    </ThemeProvider>
  );
}

export default App;
