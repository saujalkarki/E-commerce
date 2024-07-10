export function AuthInputField({ commonAttributes, renderName, type }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={commonAttributes} className=" font-medium">
          {renderName}
        </label>
        <input
          type={type}
          name={commonAttributes}
          id={commonAttributes}
          className=" border-slate-950 border-[2px] rounded-sm px-[0.30rem] py-[0.20rem]"
        />
      </div>
    </>
  );
}
