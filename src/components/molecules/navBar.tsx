"use client";
import React from "react";
import { ButtonNavBar } from "../atoms/button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { faHome, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Make a navigation Bar
export function NavBar() {
  //Check Pathname and highlight the button accordingly
  let home_active = false;
  let location_active = false;
  const pathname = usePathname();

  // if (pathname === "/login") {
  //   return;
  // }
  if (pathname === "/") {
    home_active = true;
  }
  if (pathname === "/location") {
    location_active = true;
  }

  return (
    <div className="bg-neutral-900 max-h-[4rem] h-12  px-6 flex fixed bottom-0 left-0 w-full">
      <div className="w-full">
        <li className="flex p-1 justify-between">
          <Link href={"/"}>
            <ButtonNavBar
              btnColor="bg-transparent"
              btnText="Home"
              btnTextColor={home_active ? "text-white" : "text-gray-500"}
            >
              <FontAwesomeIcon
                icon={faHome}
                className={home_active ? "text-white" : "text-gray-500"}
              />
            </ButtonNavBar>
          </Link>

          <ButtonNavBar
            btnColor="bg-transparent"
            btnText="Log Out"
            btnTextColor="text-red-500"
            onclick={() =>
              signOut({
                redirect: true,
                callbackUrl: `/login`,
              })
            }
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="text-red-500"
            />
          </ButtonNavBar>
        </li>
      </div>
    </div>
  );
}
