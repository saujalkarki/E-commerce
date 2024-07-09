import { useState } from "react";
import { AuthButton, AuthInputField } from "../index";

export function UserSignUpForm() {
  const [isSignUpPage, setIsSignUpPage] = useState(true);

  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500 rounded-md">
          <div className="flex justify-center min-w-[100%]">
            <h3
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpPage(true);
              }}
              className={`text-slate-400 font-semibold ${
                isSignUpPage ? "border-b-4 border-black text-slate-800" : ""
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
                isSignUpPage ? "" : "border-b-4 border-black text-slate-800"
              } cursor-pointer min-w-[50%] text-center py-2`}
            >
              Sign In
            </h3>
          </div>
          {isSignUpPage ? (
            <form className="flex flex-col p-3">
              <AuthInputField
                commonAttributes="userFirstName"
                renderName="First Name"
                type="text"
              />
              <AuthInputField
                commonAttributes="userLastName"
                renderName="Last Name"
                type="text"
              />
              <AuthInputField
                commonAttributes="userEmail"
                renderName="Email"
                type="email"
              />
              <AuthInputField
                commonAttributes="userContactNumber"
                renderName="Contact Number"
                type="number"
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="userImage" className=" font-medium">
                  Image
                </label>
                <input type="file" name="userImage" id="userImage" />
              </div>
              <AuthInputField
                commonAttributes="userPassword"
                renderName="Password"
                type="text"
              />
              <AuthButton AuthType={isSignUpPage} />
            </form>
          ) : (
            <form className="flex flex-col p-3">
              <AuthInputField
                commonAttributes="userEmail"
                renderName="Email"
                type="email"
              />
              <AuthInputField
                commonAttributes="userPassword"
                renderName="Password"
                type="text"
              />
              <AuthButton AuthType={isSignUpPage} />
            </form>
          )}
        </div>
      </div>
    </>
  );
}
