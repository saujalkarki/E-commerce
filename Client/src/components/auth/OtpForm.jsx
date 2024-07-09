export function OtpForm() {
  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500 rounded-md">
          <div className="flex justify-center min-w-[100%]">
            <h3 className=" text-lg font-semibold border-b-4 border-black text-slate-800 cursor-pointer min-w-[60%] text-center py-2">
              Verification
            </h3>
          </div>
          <form className="flex flex-col p-3">
            <div className="flex flex-col gap-1">
              <div>
                <label htmlFor="userOtp" className=" font-medium">
                  OTP
                </label>
              </div>
              <div className="flex gap-1">
                <input
                  type="number"
                  name="userOtp"
                  id="userOtp"
                  maxLength={1}
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
                <input
                  type="text"
                  name="userOtp"
                  id="userOtp"
                  maxLength={1}
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
                <input
                  type="text"
                  name="userOtp"
                  id="userOtp"
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
                <input
                  type="text"
                  name="userOtp"
                  id="userOtp"
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
                <input
                  type="text"
                  name="userOtp"
                  id="userOtp"
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
                <input
                  type="text"
                  name="userOtp"
                  id="userOtp"
                  className=" w-9 border-slate-950 border-[2px] rounded-sm text-center font-semibold py-1"
                />
              </div>
            </div>
            <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.35rem] hover:bg-[#417fc2]">
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
