import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

import App from './App'
import './translations/translation';

const client = new ApolloClient({
  uri: 'http://vps-123eb2fc.vps.ovh.net/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)