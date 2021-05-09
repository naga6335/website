import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "nobu";
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}
