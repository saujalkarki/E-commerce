export function ResetPasswordForm() {
  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500 rounded-md">
          <div className="flex justify-center min-w-[100%]">
            <h3 className=" text-lg font-semibold border-b-4 border-black text-slate-800 cursor-pointer min-w-[60%] text-center py-2">
              Reset Password
            </h3>
          </div>
          <form className="flex flex-col p-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="userOtp" className=" font-medium">
                New Password
              </label>
              <input
                type="email"
                name="userOtp"
                id="userOtp"
                placeholder="Your new password here...."
                className="border-slate-950 border-[2px] rounded-sm font-semibold p-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="userOtp" className=" font-medium">
                Confirm New Password
              </label>
              <input
                type="email"
                name="userOtp"
                id="userOtp"
                className="border-slate-950 border-[2px] rounded-sm font-semibold p-1"
              />
            </div>
            <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.35rem] hover:bg-[#417fc2] px-[6rem]">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
