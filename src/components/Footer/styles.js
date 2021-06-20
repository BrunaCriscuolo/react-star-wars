import styled from 'styled-components';
import { Footer } from 'rsuite';

import GlobalStyles from '../../styles/globals';

export const Container = styled(Footer)`
  background: ${GlobalStyles.colors.black};
  padding: 1rem;

  .footter__text-align{
    text-align: end;
  }
`;
