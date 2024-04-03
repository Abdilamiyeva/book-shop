import Banner from "../../public/Banner.png";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_BY_LIMIT } from "../utils";
import { Loading } from "./Loading";
import { Card } from "./Card";

export const Home = () => {
  const { loading, data } = useQuery(GET_BOOKS_BY_LIMIT, {
    variables: {
      limit: 5,
    },
  });

  if (loading) return <Loading />;

  return (
    <div>
      <div className="container pt-36">
        <div
          className="rounded-lg pt-[100px] bg-cover bg-center bg-no-repeat h-[450px]"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <h2 className="ml-10 max-w-[300px] text-white text-4xl font-semibold leading-normal">
            <span className="text-[#F0B861]">25% discount</span> <br /> all
            Paulo Coelho
            <br /> books!
          </h2>
        </div>
        <div className="mt-20 flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Best Seller</h2>
          <Link to="product">
            <button className="text-orange-600">View All </button>
          </Link>
        </div>
        <div className="mt-10 flex justify-between items-center">
          {data &&
            data.books &&
            data.books
              .slice(1, 5)
              .map(({ title, id, author, price }) => (
                <Card
                  key={id}
                  title={title}
                  id={id}
                  author={author}
                  price={price}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
