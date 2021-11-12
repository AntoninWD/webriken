import React, { useContext } from "react";
import { FaFlag, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import todoImg from "../../images/undraw_completed_tasks_vs6q.svg";
import { homeContext } from "../../context/home_context";
type todoObject = {
  taskValue: string;
  dateValue: string;
  status: string;
  statusIndex: number;
  priority: string;
  priorityIndex: number;
};

interface Props {
  removeTodoList: (task: string) => void;
  todoLists: todoObject[];
  dateHandler: (date: string, id: number) => void;
  statusHandler: (id: number) => void;
  priorityHandler: (id: number) => void;
  filteredTodoLists: todoObject[];
}
const Lists: React.FC<Props> = ({
  removeTodoList,
  todoLists,
  dateHandler,
  statusHandler,
  priorityHandler,
  filteredTodoLists,
}) => {
  const { dueTodoHandler } = useContext(homeContext);
  return (
    <Wrapper>
      <div className='headers'>
        <h5>Task</h5>
        <h5>End Date</h5>
        <h5 className='headers-status'>Status</h5>
        <h5>Priority</h5>
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
          ({ taskValue, dateValue, status, priority }, i) => {
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
                <button
                  className='trash'
                  onClick={() => removeTodoList(taskValue)}>
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
    grid-template-columns: 1fr 20% 10% 10% 10%;
    align-items: center;
    justify-items: center;
    margin: 2rem 3%;
  }

  .headers-status {
    @media only screen and (max-width: 1050px) {
      margin-right: 7px;
    }
  }
  .task {
    display: grid;
    grid-template-columns: 1fr 20% 10% 10% 10%;
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
    transition: 0;
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
    background-color: #dfc44b;
  }

  .low {
    color: #3b54e4;
  }
  .medium {
    color: #dfc44b;
  }

  .high {
    color: #e45144;
  }
  svg {
    height: 20px;
    width: 20px;
  }
  .trash {
    margin-top: 2px;
    width: 20px;
    background-color: inherit;
    :hover {
      color: var(--clr-secondary-2);
    }
  }
`;
export default Lists;
