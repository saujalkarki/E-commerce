import { useState } from "react";
import googleImg from "../assets/img/google.png";

export function UserSignUpForm() {
  const [isSignUpPage, setIsSignUpPage] = useState(true);

  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500">
          <div className="flex justify-center min-w-[100%]">
            <h3
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpPage(true);
              }}
              className={`text-slate-400 font-semibold ${
                isSignUpPage ? " border-b-4 border-black text-black" : ""
              } cursor-pointer min-w-[50%] text-center py-2`}
            >
              Sign Up
            </h3>
            <h3
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpPage(false);
              }}
              className={` text-slate-400 pl-4 font-semibold ${
                isSignUpPage ? "" : "border-b-4 border-black text-black"
              } cursor-pointer min-w-[50%] text-center py-2`}
            >
              Sign In
            </h3>
          </div>
          {isSignUpPage ? (
            <form className="flex flex-col p-3">
              <div className=" flex flex-col">
                <label htmlFor="userFirstName">First Name</label>
                <input type="text" name="userFirstName" id="userFirstName" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userLastName">Last Name</label>
                <input type="text" name="userLastName" id="userLastName" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userEmail">Email</label>
                <input type="text" name="userEmail" id="userEmail" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userContactNumber">Contact Number</label>
                <input
                  type="text"
                  name="userContactNumber"
                  id="userContactNumber"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userImage">Image</label>
                <input type="file" name="userImage" id="userImage" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userPassword">Password</label>
                <input type="text" name="userPassword" id="userPassword" />
              </div>
              <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.15rem]">
                Sign Up
              </button>
              <div className="flex items-center mb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex flex-row items-center justify-around border-slate-950 border-[1px] rounded-sm p-1 cursor-pointer">
                <img src={googleImg} alt="google Img" />
                <p className=" text-sm font-medium">Login with Google</p>
              </div>
            </form>
          ) : (
            <form className="flex flex-col p-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="text"
                  name="userEmail"
                  id="userEmail"
                  className=" border-slate-950 border-[1px] rounded-sm"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userPassword">Password</label>
                <input
                  type="text"
                  name="userPassword"
                  id="userPassword"
                  className=" border-slate-950 border-[1px] rounded-sm"
                />
              </div>
              <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.15rem]">
                Sign In
              </button>
              <div className="text-center text-xs font-medium text-[#2988bb] mb-1 cursor-pointer hover:underline underline-offset-1">
                <p>Forgot password?</p>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex flex-row items-center justify-around border-slate-950 border-[1px] rounded-sm p-1 cursor-pointer">
                <img src={googleImg} alt="google Img" />
                <p className=" text-sm font-medium">Login with Google</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
