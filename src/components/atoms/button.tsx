"use client";
import React, { ReactNode } from "react";

interface ButtonConfig {
  btnText?: string;
  btnColor?: string;
  onclick?: () => void;
  children?: ReactNode;
}

export function ButtonNavBar({
  btnText,
  btnColor,
  onclick,
  children,
  ...props
}: ButtonConfig) {
  return (
    <button
      onClick={onclick}
      className={`${btnColor} 
    + flex relative text-[14px] 
    min-h-[32px]  rounded rounded-md flex-col  
    hover:bg-indigo-500  items-center duration-150`}
      {...props}
    >
      <div className="">{children}</div>
      <div>
        <span className="text-textColor">{btnText}</span>
      </div>
    </button>
  );
}
