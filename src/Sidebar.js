import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useMe } from "./Context";

const data = [
  {
    name: "Home",
    id: 1,
    icon: <AiFillHome />,
  },
  {
    name: "About",
    id: 2,
    icon: <FcAbout />,
  },
  {
    name: "Contact",
    id: 3,
    icon: <RiContactsFill />,
  },
];

const Sidebar = () => {
  const { openSidebar, sidebarCloser } = useMe();

  return (
    <div
      className={`fixed w-10/12 top-0 left-0 h-screen bg-slate-300 sm:w-96 transition-all ${
        openSidebar ? null : "-left-full"
      }`}
    >
      <ImCross
        className="absolute right-6 top-6 text-xl cursor-pointer"
        onClick={sidebarCloser}
      />
      <div className="absolute top-16 right-0">
        {data.map((dat) => {
          const { name, id, icon } = dat;
          return (
            <div key={id}>
              <div className="flex p-2 items-center text-3xl font-bold cursor-pointer hover:bg-slate-900 hover:text-white">
                <div className="mr-5">{icon}</div>
                <div className="mr-5">{name}</div>
              </div>
              <div className="w-full h-1 bg-black"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
