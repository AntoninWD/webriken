import React, { useContext } from "react";
import { FaFlag, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import todoImg from "../../images/undraw_completed_tasks_vs6q.svg";
import { homeContext } from "../../context/home_context";
import { topToolsContext } from "../../context/topTools_context";
type todoObject = {
  taskValue: string;
  dateValue: string;
  status: string;
  statusIndex: number;
  priority: string;
  priorityIndex: number;
  active: boolean;
};

interface Props {
  removeTodoList: (task: string) => void;
  todoLists: todoObject[];
  dateHandler: (date: string, id: number) => void;
  statusHandler: (id: number) => void;
  priorityHandler: (id: number) => void;
  filteredTodoLists: todoObject[];
  activeHandler: (task: string) => void;
}
const Lists: React.FC<Props> = ({
  removeTodoList,
  todoLists,
  dateHandler,
  statusHandler,
  priorityHandler,
  filteredTodoLists,
  activeHandler,
}) => {
  const { taskHandler, currentTask } = useContext(topToolsContext);
  const { dueTodoHandler } = useContext(homeContext);
  return (
    <Wrapper>
      <div className='headers'>
        <h5>Task</h5>
        <h5>End Date</h5>
        <h5 className='headers-status'>Status</h5>
        <h5>Priority</h5>
        <h5>Active</h5>
      </div>

      {todoLists.length === 0 ? (
        <div className='add-task'>
          <img src={todoImg} alt='add-task' />
          <h2>Add a task to get started!</h2>
        </div>
      ) : (
        ""
      )}

      <div className='tasks'>
        {filteredTodoLists.map(
          ({ taskValue, dateValue, status, priority, active }, i) => {
            return (
              <div key={i} className='task'>
                <p className='task-value'>{taskValue}</p>

                <input
                  type='date'
                  value={dateValue}
                  onChange={(e) => {
                    dateHandler(e.target.value, i);
                    dueTodoHandler(filteredTodoLists);
                  }}
                  className='date'
                />
                <button
                  className={`${status.toLowerCase().replace(" ", "-")} status`}
                  onClick={() => {
                    statusHandler(i);
                  }}>
                  {status.replace("-", " ")}
                </button>
                <button
                  className={`${priority} priority`}
                  onClick={() => {
                    priorityHandler(i);
                  }}>
                  <FaFlag />
                </button>

                <input
                  type='checkbox'
                  className={active ? "active-check on" : "active-check"}
                  onClick={() => {
                    activeHandler(taskValue);
                    taskHandler(taskValue);
                    if (currentTask === taskValue) taskHandler("");
                  }}
                />

                <button
                  className='trash'
                  onClick={() => {
                    // delete the active task on the topbar if its active
                    if (currentTask === taskValue) taskHandler("");
                    removeTodoList(taskValue);
                  }}>
                  <FaTimes />
                </button>
              </div>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    height: 250px;
    width: 250px;
    @media only screen and (max-height: 750px) {
      height: 150px;
      width: 150px;
    }
  }
  .add-task {
    text-align: center;
    margin-top: 10rem;
    @media only screen and (max-height: 750px) {
      margin-top: 5rem;
    }
  }
  h2 {
    margin-top: 2rem;
  }
  input {
    border: 1px solid var(--clr-font);
    border-radius: 5px;
    padding: 2px;
    font: inherit;
    font-weight: 400;
    cursor: pointer;
    width: 12rem;
    @media only screen and (max-width: 1500px) {
      width: 7.5rem;
      font-size: 0.7rem;
    }
    @media only screen and (max-width: 1100px) {
      padding: 0;
      width: 7rem;
      margin-right: 10px;
    }
  }
  .headers {
    display: grid;
    grid-template-columns: 1fr 12rem 10% 10% 10% 5%;
    align-items: center;
    justify-items: center;
    margin: 2rem 3%;
    @media only screen and (max-width: 1500px) {
      grid-template-columns: 1fr 8rem 10% 10% 10% 5%;
    }
  }

  .headers-status {
    @media only screen and (max-width: 1050px) {
      margin-right: 7px;
    }
  }
  .task {
    position: relative;
    display: grid;
    grid-template-columns: 1fr max-content 10% 10% 10% 5%;
    justify-items: center;
    align-items: center;
    margin: 10px 2%;
    border-radius: 5px;
    box-shadow: var(--shadow);
    border: 1px solid var(--clr-font-second);
    background-color: var(--clr-bcg);
    padding: 0.7rem;
  }

  .task-value {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin: 0;
    color: var(--clr-font);
  }

  button {
    border: none;
    color: var(--clr-font);
    background-color: inherit;
    padding: 0.35rem 0.7rem;
    cursor: pointer;
    border-radius: 5px;
    transition: var(--transition);
  }

  .config {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .status {
    color: var(--clr-white);
    background-color: var(--clr-font);
    padding: 0.5rem;
    font-size: 0.75rem;
    @media only screen and (max-width: 1400px) {
      padding: 0.3rem;
      font-size: 0.55rem;
    }
  }

  .priority {
    background-color: transparent;
  }
  .in-progress {
    background-color: #3b54e4;
  }

  .not-started {
    background-color: #e45144;
  }
  .completed {
    background-color: #4bc05a;
  }
  .hold {
    background-color: #f6c215;
  }

  .low {
    color: #3b54e4;
  }
  .medium {
    color: #f6c215;
  }

  .high {
    color: #e45144;
  }
  svg {
    height: 20px;
    width: 20px;
  }

  input[type="checkbox"].active-check {
    font-size: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 3rem;
    height: 1.7rem;
    background: var(--clr-bcg);
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border: 1px solid var(--clr-font-second);
  }

  input[type="checkbox"].on {
    background: var(--clr-primary-3);
  }

  input[type="checkbox"].active-check:after {
    position: absolute;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--clr-primary-3);
    -webkit-box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    bottom: 1px;
    left: 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  input[type="checkbox"].on:after {
    left: calc(100% - 1.5rem);
    background: var(--clr-white);
  }

  .trash {
    margin-top: 2px;
    width: 20px;
    background-color: inherit;
    position: absolute;
    right: 25px;
    :hover {
      color: var(--clr-secondary-2);
    }
  }
`;
export default Lists;
