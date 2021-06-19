import React from 'react';
import { Table } from 'rsuite';

import { Container } from './styles';

const PaginationCustom = ({
  total,
  theme,
  onChangePage,
  onChangeLength,
  activePage,
  displayLength
}) => {
  const { Pagination } = Table;

  return (
    <Container theme={theme}>
      <Pagination
        lengthMenu={[
          {
            value: 5,
            label: 5
          },
          {
            value: 10,
            label: 10
          },
          {
            value: 15,
            label: 15
          },
          {
            value: 20,
            label: 20
          }
        ]}
        activePage={activePage}
        displayLength={displayLength}
        onChangePage={onChangePage}
        onChangeLength={onChangeLength}
        total={total}
      />
    </Container>
  );
};
export default PaginationCustom;



