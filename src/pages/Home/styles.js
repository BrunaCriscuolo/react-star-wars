import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  background-image: url(${GlobalStyles.images.backgroundHome});

  .home-padding{
    padding: 0 2rem;
  }
  button{
    margin: 2rem 0;
  }
  .mt-7{
    margin-top: 2rem;
  }

  @media (min-width: 992px){
    background-size: 100%;
    max-height: 100vh;

    .mt-7{
      margin-top: 2.5rem;
    }
    .home-padding{
      padding: 0 1rem;
    }
  }
  @media (min-width: 1200px){
    .mt-7{
      margin-top: 7rem;
    }
  }
`;

export const Image = styled.img`
  max-height: 100vh;
`;
