import { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Outlet } from "react-router-dom";

import { setContext } from "@apollo/client/link/context";

import "./app.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  // create User Context to check
  // logged in state and get user's
  // data from database

  const [user, setUser] = useState(null);

  // use useQuery to set user's data
  // for login

  useEffect(() => {
    document.title = "codePals";
  }, []);

  return (
    <>
      <main>
        <ApolloProvider client={client}>
          <Outlet />
        </ApolloProvider>
      </main>
    </>
  );
}
