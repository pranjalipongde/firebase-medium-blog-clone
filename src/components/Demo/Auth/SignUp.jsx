import React from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SignUp = ({ setSignInReq }) => {
  return (
    <div className="size mt-[6rem] text-center">
      <h2 className="text-3xl">Sign Up With Email</h2>
      <p className="w-full sm:w-[25rem] mx-auto py-[3rem]">
        Enter the email address associated with your acount, and we'll send a
        magic link to your inbox.
      </p>
      <form className="flex flex-col gap-4">
        <Input type="text" title="User Name" />
        <Input type="email" title="Email" />
        <Input type="password" title="Password" />
        <Input type="password" title="Confirm Password" />
        <button className="px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">
          Sign Up
        </button>
      </form>
      <button
        onClick={() => setSignInReq("")}
        className="mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto"
      >
        <MdKeyboardArrowLeft />
        All Sign Up Option
      </button>
    </div>
  );
};

export default SignUp;
