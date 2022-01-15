import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { addToolsContext } from "../../context/tools_context";
import Lists from "./Lists";
import TopTodoList from "./TopTodoList";
import { mainTools } from "../../data/interfaceTools";
import { Link } from "react-router-dom";

type todoObject = {
  taskValue: string;
  dateValue: string;
  status: string;
  statusIndex: number;
  priority: string;
  priorityIndex: number;
  active: boolean;
};

const statusArray = ["Not-Started", "In-Progress", "Completed", "Hold"];
const priorityArray = ["low", "medium", "high"];

const getLocalStorage = () => {
  let filteredTodoLists = localStorage.getItem("todo-list");

  if (filteredTodoLists) {
    let storageTodoLists: todoObject[] = JSON.parse(filteredTodoLists);
    return storageTodoLists;
  } else {
    return [];
  }
};

const TodoList: React.FC = () => {
  const [todoLists, setTodoLists] = useState<todoObject[]>(getLocalStorage());
  const [deleteActive, setDeleteActive] = useState(false);
  const [filteredTodoLists, setFilteredTodoLists] = useState<todoObject[]>(
    getLocalStorage()
  );
  const showRef = useRef<HTMLSelectElement>(null);
  const { removeTool, activeToolsHandler } = useContext(addToolsContext);

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(filteredTodoLists));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTodoLists]);

  useEffect(() => {
    if (!deleteActive) setFilteredTodoLists(todoLists);
  }, [todoLists, deleteActive]);

  const addTodoList = (todo: todoObject) => {
    setDeleteActive(false);
    const newList = [...todoLists, todo];
    setTodoLists(newList);
  };

  const removeTodoList = (task: string) => {
    setDeleteActive(false);
    setFilteredTodoLists((prevList) => {
      setDeleteActive(true);
      return prevList.filter(({ taskValue }) => taskValue !== task);
    });
    setTodoLists((prevList) => {
      setDeleteActive(true);
      return prevList.filter(({ taskValue }) => taskValue !== task);
    });
  };

  const dateHandler = (date: string, id: number) => {
    setFilteredTodoLists((prevList) => {
      return prevList.map((e, i) => {
        if (id === i) {
          e.dateValue = date;
          return e;
        } else {
          return e;
        }
      });
    });
  };

  const statusHandler = (id: number) => {
    setFilteredTodoLists((prevList) => {
      return prevList.map((e, i) => {
        if (id === i) {
          if (e.statusIndex >= 3) e.statusIndex = -1;
          e.status = statusArray[e.statusIndex + 1].replace("-", " ");
          e.statusIndex = e.statusIndex + 1;
          return e;
        } else {
          return e;
        }
      });
    });
  };

  const priorityHandler = (id: number) => {
    setFilteredTodoLists((prevList) => {
      return prevList.map((e, i) => {
        if (id === i) {
          if (e.priorityIndex >= 2) e.priorityIndex = -1;
          e.priority = priorityArray[e.priorityIndex + 1];
          e.priorityIndex = e.priorityIndex + 1;
          return e;
        } else {
          return e;
        }
      });
    });
  };

  const showHandler = (showValue: string) => {
    if (showValue === "all") {
      setFilteredTodoLists(todoLists);
      return;
    }
    let newFilteredList = [...todoLists];
    newFilteredList = newFilteredList.filter(({ status, priority }) => {
      if (status.replace(" ", "-").toLowerCase() === showValue) {
        return status.replace(" ", "-").toLowerCase() === showValue;
      }
      if (priority.toLowerCase() === showValue) {
        return priority.toLowerCase() === showValue;
      } else {
        return "";
      }
    });

    setFilteredTodoLists(newFilteredList);
  };

  const activeHandler = (task: string) => {
    setFilteredTodoLists((prevList) => {
      return prevList.map((e) => {
        if (task === e.taskValue) {
          if (e.active === true) {
            e.active = false;
          } else {
            e.active = true;
          }
          return e;
        } else {
          e.active = false;
          return e;
        }
      });
    });
  };

  return (
    <Wrapper className='tools-wrapper'>
      <TopTodoList
        addTodoList={addTodoList}
        statusArray={statusArray}
        priorityArray={priorityArray}
        showHandler={showHandler}
        showRef={showRef}
      />
      <Lists
        removeTodoList={removeTodoList}
        todoLists={todoLists}
        dateHandler={dateHandler}
        statusHandler={statusHandler}
        priorityHandler={priorityHandler}
        filteredTodoLists={filteredTodoLists}
        activeHandler={activeHandler}
      />
      <Link
        to='/app/home'
        className='remove-tool'
        onClick={() => {
          removeTool("To-do List");
          activeToolsHandler("todolist");
          mainTools[0].active = true;
        }}>
        Remove tool
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
export default TodoList;
