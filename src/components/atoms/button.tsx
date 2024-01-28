"use client";
import React, { ReactNode } from "react";

interface ButtonConfig {
  btnText?: string;
  btnColor?: string;
  btnTextColor?: string;
  onclick?: () => void;
  children?: ReactNode;
}

export function ButtonNavBar({
  btnText,
  btnColor,
  btnTextColor,
  onclick,
  children,
  ...props
}: ButtonConfig) {
  return (
    <button
      onClick={onclick}
      className={`${btnColor} 
    + flex relative text-[14px] 
    min-h-[32px] rounded rounded-md flex-col  
    hover:bg-indigo-500 px-2 items-center duration-150`}
      {...props}
    >
      <div className="px-2">{children}</div>
      <div>
        <span className={`${btnTextColor}`}>{btnText}</span>
      </div>
    </button>
  );
}
