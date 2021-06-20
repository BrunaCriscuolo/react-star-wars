import styled from 'styled-components';

import GlobalStyles from '../../styles/globals';


export const Container = styled.div`
  margin-bottom: 2rem;

  .rs-table-pagination-page-info, .rs-divider-vertical{
    visibility: hidden;
  }
  .rs-pagination > li > a:focus,
  .rs-pagination > li > a.rs-btn-focus,
  .rs-pagination > li > a:hover{
    background: none;
  }
  .rs-table-pagination-toolbar{
    padding: 10px 20px;
    justify-content: flex-end;
  }

  .rs-table-pagination-start{
    display: none;
  }

  ul{
    li{
      &.rs-pagination-btn{
        span{
          color: ${GlobalStyles.colors.black}
        }
      }
    }
  }

`;
