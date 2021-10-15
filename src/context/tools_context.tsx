import React, { useEffect, useState } from "react";

type toolObj = {
  id: number;
  text: string;
  component: string;
  icon: JSX.Element;
  type: string;
  description: string;
};

type mainContext = {
  tools: toolObj[];
  addTool: (obj: toolObj) => void;
  removeTool: (id: string) => void;
};

const getLocalStorage = () => {
  let tools = localStorage.getItem("tools");

  if (tools) {
    let storageTools: toolObj[] = JSON.parse(tools);
    return storageTools;
  } else {
    return [];
  }
};

export const addToolsContext = React.createContext<mainContext>({
  tools: [],
  addTool: () => {},
  removeTool: () => {},
});

const AddToolsContextProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<toolObj[]>(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("tools", JSON.stringify(tools));
  }, [tools]);

  const addToolHandler = (tool: toolObj) => {
    const newTool = tool;
    const toolsId = tools.map(({ id }) => {
      return id;
    });

    // prevent adding multiple same tools
    if (toolsId.includes(tool.id)) return;

    setTools((prevTool) => {
      return [...prevTool, newTool];
    });
  };

  const removeToolHandler = (text: string) => {
    setTools((prevTool) => {
      return prevTool.filter((todo) => todo.text !== text);
    });
  };

  const contextValue: mainContext = {
    tools: tools,
    addTool: addToolHandler,
    removeTool: removeToolHandler,
  };
  return (
    <addToolsContext.Provider value={contextValue}>
      {children}
    </addToolsContext.Provider>
  );
};

export default AddToolsContextProvider;
