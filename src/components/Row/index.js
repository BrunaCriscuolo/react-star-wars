import React from 'react';
import { Row } from 'rsuite';

const RowCustom = ({ className, children, gutter }) => (
  <Row className={className} gutter={gutter}>
    {children}
  </Row>
);
export default RowCustom;

