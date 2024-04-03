/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Card = ({ id, title, author, price }) => (
  <Link to={`/product/${id}`}>
    <div className="mb-4 cursor-pointer p-5 relative w-[250px] h-[350px] justify-between bg-gray-100 rounded">
      <FaRegHeart className="text-2xl text-gray-700 absolute right-1 top-2" />
      <div className="h-[150px] w-[210px] mt-3 rounded bg-gray-300"></div>
      <h3 className="text-md font-semibold mb-2 mt-3">{title}</h3>
      <p className="mb-1 italic font-mono">{author}</p>
      <p className="">{price}$</p>
    </div>
  </Link>
);
