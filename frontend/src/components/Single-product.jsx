import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SINGLE_BOOKS } from "../utils";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const SingleProduct = () => {
  const [singleProductData, setSingleProductData] = useState(null);
  const { id } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_BOOKS, {
    variables: {
      booksId: id,
    },
  });

  useEffect(() => {
    if (data && data.books) {
      setSingleProductData(data.books);
      console.log(data.books);
    }
  }, [data]);

  if (loading) return <Loading />;

  return (
    <div className="container">
      <div className="pt-36 flex justify-center items-center">
        {singleProductData && (
          <div className="flex justify-between gap-10">
            <div className="w-[500px] h-[500px] bg-slate-300"></div>
            <div>
              <h3 className="text-3xl  text-[#282c34] mb-4 font-semibold font-mono">
                {singleProductData[0].title}
              </h3>
              <p className="h-[2px] w-full bg-[#a0a0a0]" />
              <p className="text-xl mt-3 font-mono font-medium text-black">
                Author:
                <span className="pl-4 text-[#282c34] italic">
                  {singleProductData[0].author}
                </span>
              </p>
              <p className="mt-5 max-w-[900px] text-lg text-[#282c34] leading-8">
                <span className="font-medium font-mono text-xl text-black">
                  Description :
                </span>{" "}
                Harry Potter and the Deathly Hallows is a fantasy novel written
                by British author J. K. Rowling and the seventh and final novel
                of the main Harry Potter series. It was released on 14 July 2007
                in the United Kingdom by Bloomsbury Publishing, in the United
                States by Scholastic, and in Canada by Raincoast Books.
              </p>
              <p className="mt-5 text-lg text-[#282c34] leading-8">
                <span className="font-medium font-mono pr-5 text-xl text-black">
                  Rating:
                </span>
                {singleProductData[0].rating}
              </p>
              <p className="mt-5 text-lg text-[#282c34] leading-8">
                <span className="font-medium font-mono pr-5 text-xl text-black">
                  Price:
                </span>
                {singleProductData[0].price}$
              </p>

              <p className="mt-5 text-lg text-[#282c34] leading-8">
                <span className="font-medium font-mono pr-4 text-xl text-black">
                  ISBN:
                </span>
                {singleProductData[0].ISBN}
              </p>
              <p className="mt-5 text-lg text-[#282c34] leading-8">
                <span className="font-medium font-mono pr-4 text-xl text-black">
                  Number of sheets:{" "}
                </span>
                {singleProductData[0].number_of_sheets} pages
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
