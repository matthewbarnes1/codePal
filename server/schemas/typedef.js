const typeDefs = `
  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    getSingleUser(_id:ID!): User
    me(token:ID!): User
  }

  type Mutation {
    
    createUser(username: String!, email: String!, password: String!): Auth
    
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;

// saveBook(
//   userId:ID!
//   authors: [String]
//   description: String!
//   bookId: String!
//   image: String
//   link: String
//   title: String!
// ):[User]

// removeBook(_id:ID!, bookId:ID!):[User]