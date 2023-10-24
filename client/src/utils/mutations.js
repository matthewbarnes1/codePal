import { gql } from "@apollo/client";

// export const ADD_USER = gql`
//     mutaion addUser($username: String!, $email: String!, $password: String!) {
//         addUser(username: $username, email: $email, passsword: $password) {
//             token
//             user {
//                 _id
//                 username
//                 email
//             }
//         }
//     }
// `

//* This mutation can be used to create a user, given the input values

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
