import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-k82wlslt5xtdrcvd.us.auth0.com"
    clientId="4wZXDaINYVcwWtz5uSWTNqGssGw1iRdY"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
