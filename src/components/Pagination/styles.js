import styled from 'styled-components';

export const Container = styled.div`
  .rs-table-pagination-page-info, .rs-divider-vertical{
    visibility: hidden;
  }
  .rs-pagination > li > a:focus,
  .rs-pagination > li > a.rs-btn-focus,
  .rs-pagination > li > a:hover{
    background: none;
  }
  .rs-table-pagination-toolbar{
    background: ${({ theme }) => theme.background_nav};
    padding: 10px 20px;
  }
  .rs-picker-subtle .rs-btn:active, .rs-picker-subtle .rs-picker-toggle:active{
    background-color:${({ theme }) => theme.background_nav};
  }
`;
