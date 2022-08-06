import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import React Bootstrap
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import '../node_modules/bootstrap/scss/bootstrap.scss';

import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
