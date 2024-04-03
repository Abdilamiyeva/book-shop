import { books } from "./data.js";

export const resolvers = {
  Query: {
    books: (_, { id, limit }) => {
      if (id) {
        return [books.find((book) => book.id == id)];
      } else if (limit) {
        return books.slice(0, limit);
      } else {
        return books;
      }
    },
    booksByCategory: (_, { categories }) => {
      let result = [];

      categories?.forEach((category) => {
        if (category) {
          books?.forEach((book) => {
            if (book.category == category) {
              result.push(book);
            }
          });
        } else {
          result = books;
        }
      });

      return result;
    },

    booksByRating: (_, { rating }) => {
      if (!rating) {
        return books;
      }
      let result = [];
      books.forEach((book) => {
        if (book.rating == rating) {
          result.push(book);
        }
      });

      return result;
    },

    search: (_, { value }) => {
      const data = books.filter((book) => {
        if (
          book.author.toLowerCase().includes(value.toLowerCase()) ||
          book.title.toLowerCase().includes(value.toLowerCase())
        )
          return book;
      });

      return data;
    },
  },
};
