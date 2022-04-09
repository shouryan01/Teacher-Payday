import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Auth0Provider
    domain="dev-sg92b6x7.us.auth0.com"
    clientId="V4adTyJuQqmVYdIGy5exjTo5TZXImTW5"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);