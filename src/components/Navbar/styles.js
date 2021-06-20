import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  .rs-navbar-default{
    background: ${GlobalStyles.colors.black};
    border-bottom: 5px solid ${GlobalStyles.colors.yellowMain};
    padding: 1rem 1rem;
  }

  .rs-navbar-header{
    img{
      max-height: 100%;
    }
  }

  @media (min-width: 576px){
    .rs-navbar-default{
      padding: 1rem 2rem;
    }
  }
  @media (min-width: 768px){
    .rs-navbar-default{
      padding: 1rem 7rem;
    }
  }
`;
