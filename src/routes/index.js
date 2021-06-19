import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Favorites from '../pages/Favorites';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/characters' exact component={Characters} />
    <Route path='/favorites' exact component={Favorites} />
  </Switch>
);

export default Routes;
