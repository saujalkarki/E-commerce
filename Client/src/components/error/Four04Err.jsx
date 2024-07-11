import errImg from "../../assets/img/404StatusCode.png";
import homeImg from "../../assets/img/address.png";
import { Link } from "react-router-dom";

export function Four04Err() {
  return (
    <>
      <div>
        <div className=" flex flex-col items-center justify-center text-center mb-4 sm:my-4 gap-2">
          <img
            src={errImg}
            alt="404 not found"
            className=" max-w-[100vw] max-h-[50vh] sm:max-h-[70vh]"
          />
          <p className=" text-lg font-semibold text-center">
            The page you are looking for could not be found. It looks like the
            link is broken or the page has been removed.
          </p>
          <button className="flex gap-2 items-center border-black border-2 p-2 bg-[#2988bb] hover:bg-[#417fc2] rounded-sm">
            <img src={homeImg} alt="Home Image" />
            <Link to={"/"} className=" text-lg font-medium">
              GO TO HOME
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
