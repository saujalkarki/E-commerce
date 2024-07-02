import { FaLocationDot } from "react-icons/fa6";

export function Header() {
  return (
    <>
      <div className=" bg-[#2988bb] py-3 px-2 flex items-center justify-around border-neutral-950 border-b-2">
        <div className="hidden sm:flex  items-center gap-2">
          <FaLocationDot />
          <p>Itahari-4, Sunsari Nepal</p>
        </div>

        <h5 className="font-medium text-sm">
          Welcome to our multi Vendor E-commerce.
        </h5>

        <div className="hidden md:flex items-center gap-2">
          <select lang="en" className=" rounded-md">
            <option value="Eng">English</option>
            <option value="Nep">नेपाली</option>
          </select>
          <select lang="en" className=" rounded-md">
            <option value="USD">USD</option>
            <option value="NPR">NPR</option>
          </select>
        </div>
      </div>
    </>
  );
}
