import { createGlobalStyle } from 'styled-components';

import GlobalStyles from '../globals';

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
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.7rem;
    overflow-x: hidden;
  }
  h1{
    font-family: 'Kanit', sans-serif;
    font-size: 3.2rem;
    line-height: 3.7rem;
    color:${GlobalStyles.colors.white};
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h3{
    color:${GlobalStyles.colors.yellowMain};
    font-size: 1.5rem;
    line-height: 2rem;
    text-transform: uppercase;
  }
  p{
    color:${GlobalStyles.colors.white};
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 300;
    text-align: justify;
  }
  span{
    color:${GlobalStyles.colors.white};
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 300;
  }
  .container{
    display: flex;
    flex: auto;
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 425px){
    h1{
      font-size: 4.1rem;
      line-height: 4.6rem;
    }
  }
  @media (min-width: 768px){
    h1{
      font-size: 5.1rem;
      line-height: 5.6rem;
    }
  }
`;
