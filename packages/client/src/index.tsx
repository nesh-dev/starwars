import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client/react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const createApolloClient = () => {
  return new ApolloClient<NormalizedCacheObject>({
    link: new HttpLink({
      uri: "https://starwars-api-v1.herokuapp.com/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
