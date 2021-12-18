import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

  }

  html, body {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: 62.5%;
    height: 100vh;
  }

  button, input {
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  body {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.pure.white};
    background: ${({ theme }) => theme.colors.main.background};
  }

  h1, h2, h3,h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 2rem;
  }

  #message {
    display: none;
  }

  @media screen and (max-width: 1271px) {
   main, footer, header {
      display: none !important;
    }

    #message {
      display: flex;
      height: 100vh;
      width: 100vw;
    }
  }
`;
