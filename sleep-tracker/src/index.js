import React from 'react';
import ReactDOM from 'react-dom';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import './index.css';
import App from './App';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);
