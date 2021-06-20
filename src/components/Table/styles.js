import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  border: none;
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px;
  margin-top: 30px;

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
    background:  ${GlobalStyles.colors.grayLighter}!important;
  }
  .rs-table-body-row-wrapper{
    top: 60px!important;
  }
  .rs-table-cell, .rs-table-loader-wrapper, .rs-table{
    color: ${GlobalStyles.colors.grayMain};
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
      background: ${GlobalStyles.colors.yellowLight};
      color: ${GlobalStyles.colors.grayMain};

      @media (min-width: 576px){
        padding: 18px 20px;
        font-size: 0.95rem;
      }
    }
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
  .table__d-inline-block{
    display: inline-block;
  }
  span{
    &.rs-table-loader-text{
      color: ${GlobalStyles.colors.grayMain};
      font-weight: 500;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  background: ${GlobalStyles.colors.yellowMain};

  div{
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: end;
      margin: auto;
    }
  }
  h4, p{
    padding: 1rem;
    color: ${GlobalStyles.colors.grayMain};
  }
`;

