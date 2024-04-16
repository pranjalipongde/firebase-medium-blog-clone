import React from "react";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";

const Auth = () => {
  return (
    <Modal>
      <section className="z-50 fixed top-4 bottom-4 left-0 md:left-[10rem] sm:left-[3rem] overflow-auto right-0 md:right-[10rem] sm:right-[3rem] bg-white shadows">
        <button className="absolute top-8 right-8 text-2xl hover:opacity-50">
          <LiaTimesSolid />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          <>
            <h2 className="text-2xl pt-[5rem] font-bold">Welcome Back</h2>
          </>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;
