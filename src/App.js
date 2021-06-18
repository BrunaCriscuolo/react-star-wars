import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import history from './services/history';
import { persistor, store } from './store';

import GlobalStylesIndex from './styles/GlobalsStyles/styleIndex';

import 'rsuite/dist/styles/rsuite-default.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStylesIndex />
      <Router history={history}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
