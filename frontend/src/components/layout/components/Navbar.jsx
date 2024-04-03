import Logo from "../../../assets/Logo.svg";
import { HiOutlineUser } from "react-icons/hi";

export const Navbar = () => (
  <div className="py-5 shadow-xl fixed z-50 mx-auto w-full bg-white">
    <div className="container flex justify-between items-center">
      <a href="#" className="flex items-center gap-5">
        <img className="w-[60px]" src={Logo} alt="Logotip" />
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
          Book shop
        </span>
      </a>
      <div className="flex gap-5">
        <button className="rounded bg-[#F4F4FF] px-4 py-3">
          <HiOutlineUser className="text-3xl text-gray-700" />
        </button>
      </div>
    </div>
  </div>
);
