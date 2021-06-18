import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  html, body, #root{
    width: 100%;
    height: 100%;
  }
  html{
    box-sizing: border-box;
  }
  body{
    margin: 0px;
    font-family: "Be Vietnam", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
  }
`;
