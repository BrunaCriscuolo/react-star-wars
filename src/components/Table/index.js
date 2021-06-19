import React from 'react';
import { Table } from 'rsuite';

import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';

import { Container, Title } from './styles';

const TableCustom = ({
  label,
  total,
  color = 'blue',
  theme,
  marginBottom = '45px',
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
    <Container theme={theme} marginBottom={marginBottom}>
      <Title color={color} theme={theme}>
        <Grid>
          <Row>
            <Col xs={14} sm={20} md={20} lg={20}>
              <h5>
                {label}
              </h5>
            </Col>
            <Col xs={10} sm={4} md={4} lg={4}>
              <p>
                <strong>Total:</strong> {total}
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
          <Column className={item?.className} key={String(index)} width={item?.width} align={item?.align || 'center'} flexGrow={item?.flexGrow}>
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
