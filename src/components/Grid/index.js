import React from 'react';
import { Grid } from 'rsuite';

const GridCustom = ({ className, children, fluid }) => (
  <Grid className={className} fluid={fluid}>
    {children}
  </Grid>
);
export default GridCustom;

