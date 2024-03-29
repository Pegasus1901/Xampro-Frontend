import 'regenerator-runtime/runtime'

import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
// import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from '../src/components/Test/redux/store';
import { AuthProvider } from './components/login/context/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Auth0Provider
  //   domain="dev-k82wlslt5xtdrcvd.us.auth0.com"
  //   clientId="4wZXDaINYVcwWtz5uSWTNqGssGw1iRdY"
  //   redirectUri={window.location.origin}
  // >
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
  // </Auth0Provider>
)
