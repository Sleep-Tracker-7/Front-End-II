import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { indexReducer } from './reducer/indexReducer';
import { CookiesProvider } from 'react-cookie'

const store = createStore(indexReducer)

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
