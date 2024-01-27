"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "../atoms/inputField";
import { signIn } from "next-auth/react";

export default function Login() {
  //Instantiate router
  const router = useRouter();

  //Set Login username and error
  const [username, setName] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [usernameError, setUsernameError] = useState(false);

  //Set Login password and error
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [mainError, setMainError] = useState("");

  //Take action on submit button
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Set errors accordingly
    if (username === "") {
      setUsernameErrorMsg("Missing Input");
      setUsernameError(true);
    } else {
      setUsernameErrorMsg("");
      setUsernameError(false);
    }
    if (password === "") {
      setPasswordErrorMsg("Missing Input");
      setPasswordError(true);
    } else {
      setPasswordErrorMsg("");
      setPasswordError(false);
    }

    //Try the credentials submitted
    try {
      //if successful push to home page
      const signInData = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      if (!signInData?.error) {
        router.refresh();
        router.push("/");
      }
      // if (username === "test" && password === "test") {
      //   router.push("/login");
      else if (username !== "" && password !== "") {
        setMainError("INVALID CREDENTIALS!!");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleInputChange = (field: any, value: any) => {
    switch (field) {
      case "username":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-center ">
      <form onSubmit={onSubmit}>
       
        <InputField
          label="username"
          isError={usernameError}
          errorMsg={usernameErrorMsg}
          type="text"
          onChange={(value) => handleInputChange("username", value)}
        />

        <InputField
          label="password"
          errorMsg={passwordErrorMsg}
          isError={passwordError}
          type="password"
          onChange={(value) => handleInputChange("password", value)}
        />
        <div className="text-red-600 font-bold text-sm p-1 ">{mainError}</div>
        <div className="flex flex-col mt-5 mb-3">
          <button className="bg-indigo-500 hover:bg-indigo-600 font-bold p-2 rounded mt-3 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
