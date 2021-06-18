import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => (
  <>
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  </>
);

export default RouteWrapper;
