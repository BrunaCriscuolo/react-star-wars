import React from 'react';
import { Table } from 'rsuite';

import { Container } from './styles';

const PaginationCustom = ({
  total,
  onChangePage,
  activePage,
}) => {
  const { Pagination } = Table;

  return (
    <Container>
      <Pagination
        activePage={activePage}
        onChangePage={onChangePage}
        total={total}
        displayLength={10}
      />
    </Container>
  );
};
export default PaginationCustom;



