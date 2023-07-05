import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState("dark");

  const updateState = (updatedState) => {
    setState((prevState) => ({
      ...prevState,
      ...updatedState,
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
