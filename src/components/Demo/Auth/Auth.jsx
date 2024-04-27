import React, { useState } from "react";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = ({ modal, setModal }) => {
  const [createUser, setCreateUser] = useState(false);
  const [signInReq, setSignInReq] = useState("");
  // const [modal, setModal] = useState(false);

  return (
    <Modal modal={modal} setModal={setModal}>
      <section
        className={`z-50 fixed top-4 bottom-4 left-4  md:left-[10rem]
        overflow-auto right-4 md:right-[10rem] bg-white shadows transition-all duration-500
        ${modal ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute top-8 right-8 text-2xl hover:opacity-50"
        >
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {signInReq === "" ? (
            <>
              <h2 className="text-2xl pt-[5rem] font-bold">
                {createUser ? "Join Medium" : "Welcome Back"}
              </h2>

              <div className="flex flex-col gap-2 w-fit mx-auto">
                <Button
                  icon={<FcGoogle className="text-xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                />
                <Button
                  icon={<MdFacebook className="text-xl text-blue-600" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                />
                <Button
                  click={() => setSignInReq(createUser ? "sign-up" : "sign-in")}
                  icon={<AiOutlineMail className="text-xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} With Email`}
                />
              </div>

              <p>
                {createUser ? "Already have an acount?" : "No Acount?"}
                <button
                  onClick={() => setCreateUser(!createUser)}
                  className="text-green-600 hover:text-green-800 font-bold ml-2"
                >
                  {createUser ? "Sign In" : "Create One"}
                </button>
              </p>
            </>
          ) : signInReq === "sign-in" ? (
            <SignIn setSignInReq={setSignInReq} />
          ) : signInReq === "sign-up" ? (
            <SignUp setSignInReq={setSignInReq} />
          ) : null}
          <p className="md:w-[30re] mx-auto text-center text-sm mb-[3rem]">
            Click "Sign In" to agree to Medium's Terms of Service and acknoledge
            that Medium's Privacy Policy apllies to you.
          </p>
        </div>
      </section>
    </Modal>
  );
};

const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className="flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full"
    >
      {icon} {text}
    </button>
  );
};
export default Auth;
