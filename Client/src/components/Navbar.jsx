import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export function Navbar() {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" hidden">
          <img src="" alt="logo" />
        </div>

        <div className=" flex items-center">
          <input type="text" name="search" id="search" />
          <IoSearch />
        </div>

        <div className=" hidden">
          <FiShoppingCart />
          <FaRegHeart />
          <CgProfile />
        </div>
      </div>
    </>
  );
}
