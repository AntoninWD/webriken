import React, { useEffect, useState } from "react";

type toolObj = {
  id: number;
  text: string;
  component: string;
  icon: JSX.Element;
  type: string;
  description: string;
  active: boolean;
};

type mainContext = {
  tools: toolObj[];
  addTool: (obj: toolObj) => void;
  removeTool: (id: string) => void;
  activeToolsHandler: (comp: string) => void;
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
  activeToolsHandler: () => {},
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
  const activeToolsHandler = (comp: string) => {
    setTools((prevTool) => {
      return prevTool.map((e) => {
        if (comp === e.component) {
          e.active = true;
          return e;
        } else {
          e.active = false;
          return e;
        }
      });
    });
  };

  const contextValue: mainContext = {
    tools: tools,
    addTool: addToolHandler,
    removeTool: removeToolHandler,
    activeToolsHandler: activeToolsHandler,
  };
  return (
    <addToolsContext.Provider value={contextValue}>
      {children}
    </addToolsContext.Provider>
  );
};

export default AddToolsContextProvider;
