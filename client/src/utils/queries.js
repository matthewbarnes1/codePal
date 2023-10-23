import gql from "graphql-tag";

// Redacted
// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       savedPets {
//         userId
//         description
//       }
//     }
//   }
// `;



//* this query retrieves all users

export const all_users = gql`
query Users {
  users {
    id
    email
    name
    username
    password
  }
}`


