import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  background-image: url(${GlobalStyles.images.backgroundHome});
  min-height: 100vh;
  background-size: 100%;

  h1{
    color:#fff;
    text-transform: uppercase;
  }
  h3{
    color:#f6c644;
    font-size: 1rem;
    text-transform: uppercase;
  }
  p{
    color:#fff;
  }
`;

export const Image = styled.img`
  max-height: 100vh;
`;
