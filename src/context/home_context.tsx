import React, { useState } from "react";
type todoObject = {
  taskValue: string;
  dateValue: string;
  status: string;
  statusIndex: number;
  priority: string;
  priorityIndex: number;
};
type mainContext = {
  dueTodoHandler: (todo: todoObject[]) => void;
  todo: todoObject[];
};

export const homeContext = React.createContext<mainContext>({
  dueTodoHandler: () => {},
  todo: [],
});

const getLocalStorage = () => {
  let dueTodo = localStorage.getItem("dueTodo");

  if (dueTodo) {
    let storageTodoLists: todoObject[] = JSON.parse(dueTodo);
    return storageTodoLists;
  } else {
    return [];
  }
};

const HomeContextProvider: React.FC = ({ children }) => {
  const [todo, setTodo] = useState<todoObject[]>(getLocalStorage());

  const dueTodoHandler = (t: todoObject[]) => {
    setTodo(t);
  };
  const contextValue: mainContext = {
    dueTodoHandler: dueTodoHandler,
    todo: todo,
  };

  return (
    <homeContext.Provider value={contextValue}>{children}</homeContext.Provider>
  );
};

export default HomeContextProvider;
