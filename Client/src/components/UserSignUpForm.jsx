import { useState } from "react";

export function UserSignUpForm() {
  const [isSignUpPage, setIsSignUpPage] = useState(true);

  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col items-center bg-neutral-400">
          <div className="flex justify-center min-w-[100%]">
            <h3
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpPage(true);
              }}
              className={` ${
                isSignUpPage ? "border-b-4 border-black" : ""
              } cursor-pointer min-w-[50%] text-center py-2`}
            >
              Sign Up
            </h3>
            <h3
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpPage(false);
              }}
              className={`pl-4 ${
                isSignUpPage ? "" : "border-b-4 border-black"
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
                <input type="file" name="userImage" id="userImage " />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userPassword">Password</label>
                <input type="text" name="userPassword" id="userPassword" />
              </div>
              <button>Sign Up</button>
            </form>
          ) : (
            <form className="flex flex-col p-3">
              <div className="flex flex-col">
                <label htmlFor="userEmail">Email</label>
                <input type="text" name="userEmail" id="userEmail" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="userPassword">Password</label>
                <input type="text" name="userPassword" id="userPassword" />
              </div>
              <button>Sign In</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
