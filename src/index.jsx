import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './globalStyle';

axios.defaults.baseURL = 'https://girisimci-dostu-api.herokuapp.com/api/v1';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
