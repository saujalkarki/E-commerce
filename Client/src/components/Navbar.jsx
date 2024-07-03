import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
  return (
    <>
      <div className=" flex items-center justify-around bg-[#2988bb] py-[0.40rem] sm:py-[0.55rem] md:py-[0.65rem]">
        <div className="hidden sm:flex">
          <img src="" alt="logo" />
        </div>
        <div className=" flex items-center relative min-w-[60vw] sm:min-w-[50vw] md:min-w-[40vw]">
          <input
            type="text"
            name="search"
            id="search"
            className="p-1 rounded-md font-medium text-md min-w-[100%] focus:outline-none sm:p-[0.35rem]"
          />
          <IoSearch className=" absolute right-2" />
        </div>

        <div className="md:hidden">
          <RxHamburgerMenu className=" cursor-pointer text-2xl sm:text-3xl" />
        </div>

        <div className="hidden md:flex items-center gap-5">
          <FiShoppingCart size={"1.2em"} />
          <FaRegHeart size={"1.2em"} />
          <CgProfile size={"1.2em"} />
        </div>
      </div>
    </>
  );
}
