import styled from 'styled-components';
import { Button } from 'rsuite';

import GlobalStyles from '../../styles/globals';

export const ButtonCustom = styled(Button)`
  &.rs-btn{
    border-radius: 12px;
    width: 100%;
    padding: 13px 0;
    color: ${GlobalStyles.colors.black};
    background: ${GlobalStyles.colors.yellowMain};
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  &.rs-btn{
    &:hover,
      &:active,
      &:focus,
      &.rs-btn-default.rs-btn-loading:active,
      &.rs-btn-default:active:hover,
      &.rs-btn-default.rs-btn-active:hover,
      &.rs-btn-default:active:focus,
      &.rs-btn-default.rs-btn-active:focus,
      &.rs-btn-default:active.focus,
      &.rs-btn-default.rs-btn-active.focus,
      &.rs-btn-default.rs-btn-loading:focus,
      &.rs-btn-primary:not(.rs-btn-disabled):hover{
        opacity: 0.9;
        color: ${GlobalStyles.colors.black};
        background: ${GlobalStyles.colors.yellowMain};
    }
  }
`;
