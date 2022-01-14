import React from "react";
import styled from "styled-components";
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
  addTodoList: (todo: todoObject) => void;
  statusArray: string[];
  priorityArray: string[];
  showHandler: (showValue: string) => void;
  showRef: React.RefObject<HTMLSelectElement>;
}
const TopTodoList: React.FC<Props> = ({
  addTodoList,
  statusArray,
  priorityArray,
  showHandler,
  showRef,
}) => {
  const todoObj = {
    taskValue: "",
    dateValue: "",
    status: statusArray[0],
    statusIndex: 0,
    priority: priorityArray[0],
    priorityIndex: 0,
    active: false,
  };

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    if (todoObj.taskValue === "") return;
    addTodoList(todoObj);
    e.target.reset();
  };

  return (
    <Wrapper>
      <div className='section'>
        <div className='inputs'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Add New Task: </label>
            <div>
              <input
                type='text'
                placeholder='Insert your task here.'
                onChange={(e) => (todoObj.taskValue = e.target.value)}
              />
              <button>+</button>
            </div>
          </form>
        </div>
        <div>
          <label htmlFor='show'>Show: </label>
          <select
            name='show'
            ref={showRef}
            onChange={(e) => showHandler(e.target.value)}>
            <option value='all'>All</option>
            <option value='in-progress'>Status(In Progress)</option>
            <option value='not-started'>Status(Not Started)</option>
            <option value='completed'>Status(Completed)</option>
            <option value='hold'>Status(Hold)</option>
            {/* priority here */}
            <option value='low'>Priority(Low)</option>
            <option value='medium'>Priority(Medium)</option>
            <option value='high'>Priority(High)</option>
          </select>
        </div>
      </div>
      <hr className='bar' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 10%;
    @media only screen and (max-width: 1300px) {
      margin: 2rem 5%;
    }
    @media only screen and (max-width: 720px) {
      display: block;
      text-align: center;
      margin: 3rem 10%;
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
      display: inline-block;
    }
  }
  hr {
    margin-left: 5%;
  }
  label {
    font-size: 1.1rem;
  }

  input {
    width: 30rem;
    ::placeholder {
      text-align: center;
    }

    @media only screen and (max-width: 1200px) {
      width: 20rem;
    }
    @media only screen and (max-width: 430px) {
      width: 14rem;
    }
  }

  input,
  select {
    margin: 0 5px;
    border: 1px solid var(--clr-grey-5);
    border-radius: 5px;
    padding: 3px;
    font: inherit;
    font-weight: 400;
    padding-top: 4px;
    @media only screen and (max-width: 500px) {
      margin: 0;
    }
  }

  select {
    @media only screen and (max-width: 1100px) {
      width: 5rem;
    }
  }
  button {
    border: none;
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    color: var(--clr-white);
    padding: 0.37rem 0.7rem;
    cursor: pointer;
    margin-left: -15px;
    font-size: 1.1rem;
    border-radius: 5px;
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    transition: var(--transition);
    :hover {
      background-color: var(--clr-grey-3);
      border: none;
    }
    @media only screen and (max-width: 720px) {
      padding: 0.3rem 0.65rem;
    }
  }

  .inputs {
    margin: 1rem 0;
  }
`;
export default TopTodoList;
