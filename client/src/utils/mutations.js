import { gql } from "@apollo/client";

export const login_user = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export const create_user = gql`
  mutation user(
    $email: String!
    $name: String!
    $username: String!
    $password: String!
  ) {
    user(email: $email, name: $name, username: $username, password: $password) {
      token
      user {
        id
        email
        name
        username
        password
      }
    }
  }
`;
