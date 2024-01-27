"use client";
import React from "react";
import { ButtonNavBar } from "../atoms/button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
//Make a navigation Bar
export function NavBar() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return;
  }
  return (
    <div className="bg-darkgray max-h-[4rem] h-12 border-t px-6 flex fixed bottom-0 left-0 w-full">
      <div className="w-full">
        <li className="flex  p-2.5 justify-between">
          <Link href={"/"}>
            <ButtonNavBar
              btnColor="bg-transparent"
              btnText="Home"
            ></ButtonNavBar>
          </Link>
          <Link href={"/"}>
            <ButtonNavBar
              btnColor="bg-transparent"
              btnText="SingOut"
              onclick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: `/login`,
                })
              }
            ></ButtonNavBar>
          </Link>
        </li>
      </div>
    </div>
  );
}
