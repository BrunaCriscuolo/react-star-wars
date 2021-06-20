import React from 'react';
import { Grid } from 'rsuite';

const GridCustom = ({ children, className }) => (
  <Grid className={className}>
    {children}
  </Grid>
);
export default GridCustom;

