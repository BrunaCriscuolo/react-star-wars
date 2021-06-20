import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  background: ${GlobalStyles.colors.black};
  background-image: url(${GlobalStyles.images.space});
  text-align: center;
  padding: 7rem 3rem;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
`;
