export const typedefs = `
  type Book {
    id:ID!
    title: String!
    author: String!
    price: Float!
    number_of_sheets: Int!
    category: String!
    date: Int!
    ISBN: String!
    rating:Int!
  }
  
  type Query {
    books(id: ID, limit:Int): [Book]
    booksByCategory(categories: [String]!):[Book]
    booksByRating(rating:Int!):[Book]
    search(value: String!): [Book]
  }
  
`;
