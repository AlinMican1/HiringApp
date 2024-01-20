import React from "react";

interface inputFieldProps {
  errorMsg: string;
  isError: boolean;
  label: string;
  type: string;
  onChange: (value: string) => void;
}

export const InputField = ({
  label,
  errorMsg,
  isError,
  type,
  onChange,
}: inputFieldProps) => {
  return (
    <div className="flex flex-col mt-3 mb-1">
      <label className="text-white font-bold text-12 p-1">{label}</label>
      <input
        className={`p-2 w-80 rounded border-2 border-[#424549] focus:outline-none focus:border-indigo-500 text-black ${
          isError ? "border-red-500 focus:border-red-500" : ""
        }`}
        name="password"
        placeholder={label}
        //value={password}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
      {isError && (
        <span className="text-red-600 font-bold text-sm p-1">{errorMsg}</span>
      )}
    </div>
  );
};
