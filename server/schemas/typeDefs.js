const { gql } = require('apollo-server-express');
const typeDefs = gql`
type Accessory {
    id: ID!
    accName: String!
    eH: Int!
    pH: Int!
    accAge: Int!
    accFor: String!
}

type Food {
    id: ID!
    foodName: String!
    eH: Int!
    pH: Int!
    foodAge: Int!
    foodFor: String!
}

type Toy {
    id: ID!
    toyName: String!
    eH: Int!
    pH: Int!
    toyAge: Int!
    toyFor: String!
}

type Pet {
    id: ID!
    species: String!
    age: Int!
    petName: String!
    petDesc: String!
    pH: Int!
    eH: Int!
    petToys: [Toy]
    PetAcc: [Accessory]
    PetFood: [Food]
}

type User {
    id: ID!
    email: String!
    name: String!
    username: String!
    password: String!
    pets: [Pet]
}

  type Query {
  accessories: [Accessory]
  foods: [Food]
  toys: [Toy]
  pets: [Pet]
  users: [User]
  accessory(id: ID!): Accessory
  food(id: ID!): Food
  toy(id: ID!): Toy
  pet(id: ID!): Pet
  user(id: ID!): User
}
type Mutation {
  accessory(accName: String!, eH: Int!, pH: Int!, accAge: Int!, accFor: String!): Accessory
  food(foodName: String!, eH: Int!, pH: Int!, foodAge: Int!, foodFor: String!): Food
  toy(toyName: String!, eH: Int!, pH: Int!, toyAge: Int!, toyFor: String!): Toy
  pet(species: String!, age: Int!, petName: String!, petDesc: String!, pH: Int!, eH: Int!, petToys: [Toy], PetAcc: [Accessory], PetFood: [Food]): Pet
  user(email: String!, name: String!, username: String!, password: String!, pets: [Pet]): User
}
`;

module.exports = typeDefs;


