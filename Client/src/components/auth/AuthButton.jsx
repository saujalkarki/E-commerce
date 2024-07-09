import googleImg from "../../assets/img/google.png";
import { Link } from "react-router-dom";

export function AuthButton({ AuthType }) {
  return (
    <>
      <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.35rem] hover:bg-[#417fc2]">
        {AuthType ? "Sign Up" : "Sign In"}
      </button>
      <div
        className={`${
          AuthType
            ? "hidden"
            : "text-center text-xs font-medium text-[#2988bb] mb-1 cursor-pointer hover:underline underline-offset-1"
        }`}
      >
        <Link to={"/user/forgot/email"}>Forgot password?</Link>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-row items-center pl-4 gap-16 border-slate-950 border-[1px] rounded-sm py-2 cursor-pointer px-16 sm-px-20">
        <img src={googleImg} alt="google Img" />
        <p className=" text-sm font-medium">
          {`${AuthType ? "Sign up" : "Login"} with Google`}
        </p>
      </div>
    </>
  );
}
