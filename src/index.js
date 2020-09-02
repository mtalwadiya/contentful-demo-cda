import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';


const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_CONTENTFUL_APIKEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

ReactDOM.render((<ApolloProvider client={client}>
  <App />
</ApolloProvider>),
  document.getElementById('root')
);
