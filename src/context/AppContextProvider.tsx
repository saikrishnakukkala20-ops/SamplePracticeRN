import React, { createContext, ReactNode, useState } from "react";

// Create the context
export const AppContext = createContext({});


type AppProviderProps ={
    children: ReactNode
}

// Create the provider component
export const AppProvider = ({ children } : AppProviderProps) => {
  const [user, setUserData] = useState("Guest");
  return (
    <AppContext.Provider value={{ user, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
