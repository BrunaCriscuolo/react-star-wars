import React, { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';

import Layout from '../pages/_layout';

const RouteWrapper = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const [isInternal, setIsInternal] = useState(false);

  useEffect(() => {
    setIsInternal(false);
    if (location.pathname !== '/') setIsInternal(true);
  }, [location.pathname]);

  return (
    <>
      {isInternal ? (
        <Route
          {...rest}
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ) : (
        <Route
          {...rest}
          render={props => (
            <Component {...props} />
          )}
        />
      )}
    </>
  );
};

export default RouteWrapper;
