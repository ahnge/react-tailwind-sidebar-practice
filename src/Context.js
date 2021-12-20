import React, { useContext, useState } from "react";

const MyContext = React.createContext();

// custom hooks
export const useMe = () => {
  return useContext(MyContext);
};

const Context = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const sidebarOpenner = () => {
    setOpenSidebar(true);
  };
  const sidebarCloser = () => {
    setOpenSidebar(false);
  };
  const modalOpenner = () => {
    setOpenModal(true);
  };
  const modalCloser = () => {
    setOpenModal(false);
  };

  return (
    <MyContext.Provider
      value={{
        openSidebar,
        openModal,
        sidebarOpenner,
        sidebarCloser,
        modalOpenner,
        modalCloser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
