import React, { createContext } from "react";
// data
import contacts from "../data/users.json";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const value = { contacts };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
