import styled from 'styled-components';
import { Button } from 'rsuite';

import GlobalStyles from '../../styles/globals';

export const ButtonCustom = styled(Button)`
  &.rs-btn{
    border-radius: 12px;
    width: 100%;
    color: ${GlobalStyles.colors.black};
    background: ${GlobalStyles.colors.yellowMain};
    font-size: 0.9rem;
    line-height: 1.4rem;
    padding: 10px;
    font-weight: 500;
    text-transform: uppercase;
  }

  &.rs-btn{
    &:hover,
      &:active,
      &:focus,
      &.rs-btn-default:active:hover,
      &.rs-btn-default.rs-btn-active:hover,
      &.rs-btn-default:active:focus,
      &.rs-btn-default.rs-btn-active:focus,
      &.rs-btn-default:active.focus,
      &.rs-btn-default.rs-btn-active.focus,{
        opacity: 0.9;
        color: ${GlobalStyles.colors.black};
        background: ${GlobalStyles.colors.yellowMain};
    }
  }
`;
