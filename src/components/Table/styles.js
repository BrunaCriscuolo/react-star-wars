import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  border: none;
  box-shadow: ${({ theme }) => theme.zContainer};
  margin-top: 30px;

  input{
    border-radius: 11px;
    padding: 5px 20px;
  }
  .rs-grid-container{
    width: 100%;
  }
  .rs-table-row{
    border: none;
    font-size: 0.95rem;
  }
  .rs-table-cell-content{
    padding: 7px 5px;

    @media (min-width: 576px){
      padding: 7px 20px;
    }
  }
  .rs-table-hover .rs-table-row:not(.rs-table-row-header):hover,
  .rs-table-hover .rs-table-row:hover .rs-table-cell-group,
  .rs-table-hover .rs-table-row:hover .rs-table-cell {
    background: ${({ theme }) => theme.table_background_hover}!important;
    color: ${({ theme }) => theme.table_color_hover};
  }
  .rs-table-body-row-wrapper{
    top: 60px!important;
  }
  .rs-table-cell, .rs-table-loader-wrapper, .rs-table{
    background: ${({ theme }) => theme.table_background};
    color: ${({ theme }) => theme.table_color};
  }
  .rs-table-row-header{
    height: 60px!important;
    .rs-table-cell{
      height: 60px!important;
    }
    .rs-table-cell-content{
      padding: 18px 5px;
      height: 60px!important;

      font-size: 0.8rem;
      font-weight: 500;
      background: ${({ theme }) => theme.thead_background};
      color: ${({ theme }) => theme.thead_color};

      @media (min-width: 576px){
        padding: 18px 20px;
        font-size: 0.95rem;
      }
    }
  }
  .rs-table-row-header{
    background: ${({ theme }) => theme.thead_background};
  }

  .icon__container{
    i{
      font-size: 16px;
      margin: 0 5px;
      cursor:pointer;

      &:first-child{
        margin-left: 0;
      }
    }
  }
  .d-inline-block{
    display: inline-block;
  }
`;

export const Title = styled.div`
  display: flex;

  background: ${props => {
    if (props.color === 'red') {
      return `${props.theme.thead_red}`;
    }
    if (props.color === 'purple') {
      return `${props.theme.thead_purple}`;
    }
    if (props.color === 'pink') {
      return `${props.theme.thead_pink}`;
    }
    return `${GlobalStyles.colors.info_light}`;
  }};

  div{
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: end;
      margin: auto;
    }
  }
  h5, p{
    padding: 1rem;
  }
  p{
    color: ${GlobalStyles.colors.gray_900};
  }
`;

