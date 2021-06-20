
import styled from 'styled-components';
import { Input } from 'rsuite';

import GlobalStyles from '../../styles/globals';

export const TextField = styled(Input)`
  border-radius: 12px;
  padding: 12px 20px;
  width: 100%;
  border: none;
  background: ${GlobalStyles.colors.white};
`;
