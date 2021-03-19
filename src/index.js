import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './store/reducers';
import App from './components/app/app';
import slides from './mocks/slides';
import './css/style.scss';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App images={slides}/>
  </Provider>,
  document.getElementById('root')
);
