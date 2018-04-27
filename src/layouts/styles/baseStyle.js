import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #374047;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`;
