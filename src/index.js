import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppSide';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@nextui-org/react';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
      <App />
  </React.StrictMode>,
    document.getElementById('root'),
);
reportWebVitals();
