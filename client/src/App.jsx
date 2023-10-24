import { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ViewComponent from "./components/ViewComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupForm from "./pages/Signup";

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
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
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

  if (!user) {
    return (
      <>
        {/* show LandingPAge here and then */}

        <ApolloProvider client={client}>
          <SignupForm />
        </ApolloProvider>
      </>
    );
  } else {
    return (
      <>
        {/* else */}

        {/* when logged in, show the ViewComponent */}

        {/* <Header /> */}
        <ViewComponent />
        <Footer />
      </>
    );
  }
}
