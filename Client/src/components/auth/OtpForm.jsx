// import OTPInput from "otp-input-react";
// import { useState } from "react";

// export function OtpForm() {
//   const [OTP, setOTP] = useState("");

//   console.log(typeof OTP);
//   console.log(OTP);

//   return (
//     <>
//       <div className=" flex flex-col items-center my-14">
//         <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500 rounded-md">
//           <div className="flex justify-center min-w-[100%]">
//             <h3 className=" text-lg font-semibold border-b-4 border-black text-slate-800 min-w-[60%] text-center py-2">
//               Verification
//             </h3>
//           </div>
//           <form className="flex flex-col p-3">
//             <div className="flex flex-col gap-1">
//               <div>
//                 <label htmlFor="userOtp" className=" font-medium">
//                   OTP
//                 </label>
//               </div>
//               <OTPInput
//                 value={OTP}
//                 onChange={setOTP}
//                 autoFocus={true}
//                 OTPLength={6}
//                 otpType="number"
//                 className="otp-container"
//               />
//               <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.35rem] hover:bg-[#417fc2]">
//                 Verify
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

import OtpInput from "react-otp-input";
import { useState } from "react";

export function OtpForm() {
  const [otp, setOtp] = useState("");

  console.log(typeof otp);
  console.log(otp);

  return (
    <>
      <div className=" flex flex-col items-center my-14">
        <div className="flex flex-col border-t-2 items-center shadow-lg shadow-gray-500 rounded-md">
          <div className="flex justify-center min-w-[100%]">
            <h3 className=" text-lg font-semibold border-b-4 border-black text-slate-800 min-w-[60%] text-center py-2">
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
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
                inputType="Number"
                containerStyle={{
                  display: "flex",
                  gap: "1px",
                }}
                inputStyle={{
                  border: "2px solid black",
                  borderRadius: "4px",
                  padding: "10px 0",
                }}
              />
              <button className="bg-[#2988bb] border-[1px] rounded-sm my-2 font-semibold py-[0.35rem] hover:bg-[#417fc2]">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
