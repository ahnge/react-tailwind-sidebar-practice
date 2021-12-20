import React from "react";
import { useMe } from "./Context";

const Home = () => {
  const { modalOpenner, sidebarOpenner } = useMe();

  return (
    <>
      <div
        className="fixed top-5 left-5 cursor-pointer"
        onClick={sidebarOpenner}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
        <button
          className="border-2 border-black rounded p-2 font-bold hover:text-white hover:bg-black transition-colors"
          onClick={() => modalOpenner()}
        >
          Show modal
        </button>
      </div>
    </>
  );
};

export default Home;
