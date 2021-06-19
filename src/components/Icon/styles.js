import styled from 'styled-components';

export const Container = styled.div`
  display: inline;

  i {
    &.rs-icon{
      font-size: ${({ fontSize }) => fontSize}
    }
  }

  &.disabled{
    cursor: not-allowed;
  }
`;
