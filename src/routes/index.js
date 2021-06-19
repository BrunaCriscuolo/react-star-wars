import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Home from '../pages/Home';
import Characters from '../pages/Characters';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/characters' exact component={Characters} />
  </Switch>
);

export default Routes;
