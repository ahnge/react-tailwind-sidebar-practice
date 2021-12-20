import React from "react";
import { useMe } from "./Context";

const Modal = () => {
  const { openModal, modalCloser } = useMe();
  return (
    <div
      className={`absolute w-full h-full top-0 left-0 bg-gray-200 cursor-pointer flex items-center justify-center z-10 opacity-90 ${
        openModal ? null : "hidden"
      }`}
      onClick={modalCloser}
    >
      <div className="w-11/12 h-auto bg-gray-900 text-white p-5 rounded-lg z-20 cursor-auto sm:w-6/12">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ut
          voluptate nulla animi mollitia, odio optio commodi quasi. Iusto
          aperiam deserunt iure itaque nesciunt voluptates explicabo nisi
          commodi sit distinctio.
        </p>
        <button
          className="font-bold border border-zinc-400 rounded px-4 block mx-auto mt-5 hover:bg-white hover:text-black"
          onClick={modalCloser}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
