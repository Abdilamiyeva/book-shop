import { useQuery } from "@apollo/client";
import { Loading } from "./Loading";
import { Card } from "./Card";
import {
  BOOKS_BY_CATEGORY,
  BOOKS_BY_RATING,
  GET_BOOKS,
  SEARCH,
} from "../utils/index";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { CATEGORIES, RATINGS } from "./constants";

export const Products = () => {
  const [inputValue, setInputValue] = useState("");
  const [booksData, setBooksData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);
  const [selectedRating, setSelectedRating] = useState("");

  const { loading, data } = useQuery(GET_BOOKS);

  const { data: books } = useQuery(SEARCH, {
    variables: {
      value: inputValue,
    },
  });

  const { data: dataByCategory } = useQuery(BOOKS_BY_CATEGORY, {
    variables: { categories: selectedCategories },
  });

  const { data: dataByRating } = useQuery(BOOKS_BY_RATING, {
    variables: {
      rating: Number(selectedRating),
    },
  });

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    if (data && data.books) {
      setBooksData(data.books);
    }
  }, [data]);

  useEffect(() => {
    if (books && books.search) {
      setBooksData(books.search);
    }
  }, [books]);

  useEffect(() => {
    if (dataByCategory && dataByCategory.booksByCategory) {
      setBooksData(dataByCategory.booksByCategory);
    }
  }, [dataByCategory]);

  useEffect(() => {
    if (dataByRating && dataByRating.booksByRating) {
      setBooksData(dataByRating.booksByRating);
    }
  }, [dataByRating]);

  if (loading) return <Loading />;

  return (
    <div className="pt-32 ">
      <div className="relative container ">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="p-3 pl-5 text-xl text-gray-800 bg-[#F4F4FF] w-full outline-none rounded"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <div className="absolute top-1 right-10 mt-3">
          <GrSearch className="text-2xl text-gray-600" />
        </div>
      </div>

      <div className="container pt-10 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-serif text-gray-800">Filters</h2>
          <h3 className="text-xl mt-5 leading-normal font-medium font-mono text-gray-700">
            Category
          </h3>
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className=" ml-3 flex items-start space-x-3 py-2"
            >
              <input
                type="checkbox"
                className="border-gray-300 rounded h-5 w-5"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <div className="flex flex-col">
                <h4 className="text-gray-700 font-medium leading-none">
                  {category}
                </h4>
              </div>
            </div>
          ))}
          <h3 className="text-xl mt-10 leading-normal font-medium font-mono text-gray-700">
            Rating
          </h3>
          {RATINGS.map((rating) => (
            <div key={rating} className="flex mt-5 gap-3 mb-4">
              <input
                type="radio"
                value={rating}
                className="border-gray-300 rounded h-5 w-5"
                checked={rating == selectedRating}
                onChange={(event) => setSelectedRating(event.target.value)}
              />
              <div className="flex flex-col">
                <h4 className="text-gray-700 font-medium leading-none">
                  {rating} stars or above
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          {booksData.map(({ id, title, author, price }) => (
            <Card
              id={id}
              key={id}
              title={title}
              author={author}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
