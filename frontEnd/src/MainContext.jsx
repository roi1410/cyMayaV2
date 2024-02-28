import { createContext, useState } from "react";

export const allContext = createContext({ test: "" });

const MainContext = ({ children }) => {
  const test = "test";
  return <allContext.Provider value={{ test }}>{children}</allContext.Provider>;
};
export default MainContext;