import React from 'react';
import { Table } from 'rsuite';

import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';

import { Container, Title } from './styles';

const TableCustom = ({
  label,
  total,
  data,
  loading,
  header,
  children,
  hasAction,
  returnAction,
  flexGrowAction = 1
}) => {
  const { Column, HeaderCell, Cell } = Table;

  return (
    <Container>
      <Title>
        <Grid>
          <Row>
            <Col xs={15} sm={20} md={20} lg={20}>
              <h4>
                {label}
              </h4>
            </Col>
            <Col xs={9} sm={4} md={4} lg={4}>
              <p>
                <strong>#{total} results</strong>
              </p>
            </Col>
          </Row>
        </Grid>
      </Title>
      <Table
        height={400}
        data={data}
        loading={loading}
        autoHeight
      >
        {header.map((item, index) => (
          <Column
            className={item?.className}
            key={String(index)}
            width={item?.width}
            align={item?.align || 'center'}
            flexGrow={item?.flexGrow}
          >
            <HeaderCell>{item?.name}</HeaderCell>
            <Cell dataKey={item?.dataKey} />
          </Column>
        ))}

        {hasAction && (
          <Column flexGrow={flexGrowAction} align='center'>
            <HeaderCell>Ações</HeaderCell>
            <Cell>
              {returnAction}
            </Cell>
          </Column>
        )}
      </Table>
      {children}
    </Container>
  );
};
export default TableCustom;
