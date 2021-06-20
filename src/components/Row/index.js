import React from 'react';
import { Row } from 'rsuite';

const RowCustom = ({ children, className }) => (
  <Row className={className}>
    {children}
  </Row>
);
export default RowCustom;

