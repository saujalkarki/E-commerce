import { FaLocationDot } from "react-icons/fa6";
import noBackgroundLogo from "../assets/img/noBackgroundLogo.png";

export function Header() {
  return (
    <>
      <div className=" bg-[#2988bb] py-4 px-2 flex items-center justify-around border-b-2 border-neutral-950">
        <img src={noBackgroundLogo} alt="logo" className=" h-10 sm:hidden" />
        <div className="hidden items-center gap-2 sm:flex font-medium md:">
          <FaLocationDot />
          <p>Itahari-4, Sunsari Nepal</p>
        </div>

        <h5 className="hidden sm:flex font-[650] text-[0.9rem] sm:text-[1.05rem]">
          Welcome to our multi Vendor E-commerce.
        </h5>

        <div className="hidden items-center gap-2 md:flex">
          <select
            lang="en"
            className=" rounded-md font-semibold focus:outline-none p-1 lg:px-2"
          >
            <option value="Eng">English</option>
            <option value="Nep">नेपाली</option>
          </select>
          <select
            lang="en"
            className=" rounded-md font-semibold focus:outline-none p-1 lg:px-2"
          >
            <option value="USD">USD</option>
            <option value="NPR">NPR</option>
          </select>
        </div>
      </div>
    </>
  );
}
