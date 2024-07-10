import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

export function ShowPassword({ label, commonAttributes }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1 relative">
        <label htmlFor={commonAttributes} className=" font-medium">
          {label}
        </label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          name={commonAttributes}
          id={commonAttributes}
          className="border-slate-950 border-[2px] rounded-sm font-semibold p-1"
        />
        <div
          className=" absolute right-2 top-9 cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </div>
      </div>
    </>
  );
}
