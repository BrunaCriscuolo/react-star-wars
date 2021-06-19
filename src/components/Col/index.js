import React from 'react';
import { Col } from 'rsuite';

const ColCustom = ({
  className,
  children,
  lg,
  md,
  sm,
  xs,
}) => (
  <Col
    className={className}
    lg={lg}
    md={md}
    sm={sm}
    xs={xs}
  >
    { children}
  </Col >
);
export default ColCustom;

