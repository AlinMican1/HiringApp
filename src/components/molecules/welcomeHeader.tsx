import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DateTime } from "../atoms/dateTime";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Welcome header for the Dashboard
 * Using session provider to get the current user logged in
 * Display their username and a welcome message.
 */
export async function WelcomeHeader() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col">
      <h1 className="font-titleHeader text-2xl my-4 font-bold">DashBoard</h1>
      <div className="rounded bg-neutral-800 p-4 text-gray-200">
        <h1>
          <FontAwesomeIcon icon={faHome} className="text-2xl text-pink-600" />
        </h1>
        <h1 className="font-subHeader text-[20px] font-bold text-gray-200 my-2 flex flex-row">
          <DateTime />
          <span className="capitalize px-1">{session?.user.username}!</span>
        </h1>
        <h3 className="font-paragraph text-base font-bold text-gray-400">
          Add the position and location you need to hire accordingly, and get
          updated with HR team new hirees.{" "}
        </h3>
        {session?.user ? <div></div> : ""}
      </div>
    </div>
  );
}
