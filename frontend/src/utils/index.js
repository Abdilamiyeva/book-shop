import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      price
    }
  }
`;

export const GET_SINGLE_BOOKS = gql`
  query books($booksId: ID) {
    books(id: $booksId) {
      author
      id
      number_of_sheets
      category
      date
      ISBN
      price
      title
      rating
    }
  }
`;

export const GET_BOOKS_BY_LIMIT = gql`
  query books($limit: Int) {
    books(limit: $limit) {
      id
      author
      price
      title
      category
    }
  }
`;

export const SEARCH = gql`
  query books($value: String!) {
    search(value: $value) {
      id
      title
      author
      price
    }
  }
`;

export const BOOKS_BY_CATEGORY = gql`
  query BooksByCategory($categories: [String]!) {
    booksByCategory(categories: $categories) {
      title
      id
      price
      author
    }
  }
`;

export const BOOKS_BY_RATING = gql`
  query BooksByRating($rating: Int!) {
    booksByRating(rating: $rating) {
      author
      id
      price
      rating
      title
    }
  }
`;
