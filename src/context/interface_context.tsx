import React, { useState } from "react";
import { mainTools } from "../data/interfaceTools";

type mainContext = {
  mainComponent: string;
  setMain: (component: string) => void;
};

export const interfaceContext = React.createContext<mainContext>({
  mainComponent: "home",
  setMain: () => {},
});

const InterfaceContextProvider: React.FC = ({ children }) => {
  const [main, setMain] = useState<string>("home");
  const setMainHandler = (component: string) => {
    if (component !== "home") {
      mainTools[0].active = false;
    }

    setMain(component);
  };
  const contextValue: mainContext = {
    mainComponent: main,
    setMain: setMainHandler,
  };

  return (
    <interfaceContext.Provider value={contextValue}>
      {children}
    </interfaceContext.Provider>
  );
};

export default InterfaceContextProvider;
