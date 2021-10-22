import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { topToolsContext } from "../../context/topTools_context";

const CurrentTask: React.FC = () => {
  const { taskHandler } = useContext(topToolsContext);
  const [currentTaskList, setCurrentTaskList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(-1);
  const task = useRef<HTMLInputElement>(null);
  const active = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
  };

  const addList = (t: string) => {
    if (!t) return;
    setCurrentTaskList([...currentTaskList, t]);
  };

  useEffect(() => {
    if (currentTaskList.length === 0) taskHandler("");
  }, [currentTaskList, taskHandler]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          className='input-task'
          type='text'
          placeholder='Add a task'
          ref={task}
        />
        <button
          type='submit'
          className='plus-button'
          onClick={() => {
            if (task.current) addList(task.current.value);
            if (task.current) task.current.value = "";
          }}>
          +
        </button>
      </form>
      <div className='tasks'>
        <ul>
          {currentTaskList.map((e, id) => {
            return (
              <div className='task' key={id}>
                <li>{e}</li>
                <div className='task-btns'>
                  <div className='activate'>
                    <label className='switch on'>
                      <input
                        type='checkbox'
                        ref={active}
                        checked={isChecked === id}
                        onChange={() => {
                          taskHandler(e);
                          if (isChecked === id) {
                            taskHandler("");
                          }
                        }}
                        onClick={() => {
                          if (isChecked === id) {
                            setIsChecked(-1);
                          } else {
                            setIsChecked(id);
                          }
                        }}
                      />

                      <span className='slider round'></span>
                    </label>
                    <div className='info'>
                      <p>Set active</p>
                    </div>
                  </div>
                  <button
                    className='task-btn delete'
                    onClick={() => {
                      setCurrentTaskList((prevTask) => {
                        return prevTask.filter((_, i) => i !== id);
                      });
                      if (currentTaskList.length === 1) setIsChecked(-1);
                      if (isChecked === id) {
                        setIsChecked(-1);
                        taskHandler("");
                      }
                    }}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
  }

  .input-task {
    width: 70%;
    padding: 0.5rem;
    margin: 0;
    @media only screen and (max-width: 1450px) {
      width: 50%;
    }
  }
  .plus-button {
    border: none;
    background-color: var(--clr-primary-4);
    color: var(--clr-white);
    padding: 0.37rem 1rem;
    margin: 0;
    margin-left: -5px;
    font-size: 1.2rem;
    border-radius: 0px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    transition: var(--transition);
    :hover {
      background-color: var(--clr-primary-3);
      border: none;
    }
  }
  .tasks {
    overflow-y: scroll;
    height: 26rem;
  }

  .tasks::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  .tasks::-webkit-scrollbar {
    width: 14px;
    background-color: transparent;
  }

  .tasks::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--clr-grey-9);
  }

  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--clr-grey-7);
    border-radius: 5px;
    box-shadow: rgba(58, 58, 58, 0.061) 0px 5px 10px;
    width: 95%;
    padding: 3px 7px;
    position: relative;
    margin-left: 8px;
    margin-top: 2rem;
  }
  .task-btns {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .task-btn {
    margin: 5px;
    border: none;
    padding: 0;
    color: var(--clr-font);
    :hover {
      background-color: transparent;
      color: var(--clr-secondary-2);
      border: none;
    }
  }
  svg {
    height: 20px;
    width: 20px;
    margin-top: 6px;
  }
  .on {
    margin-right: 15px;
  }
  .activate {
    position: relative;
    margin-top: 6px;
  }
  .activate .info {
    position: absolute;
    top: -45px;
    left: -20px;
    display: none;
    background-color: var(--clr-font);
    font-weight: 600;
    border-radius: 5px;
    height: 25px;
    width: 80px;
  }
  .info p {
    color: var(--clr-bcg);
    opacity: 1;
  }

  .activate:hover .info {
    display: block;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 19px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--clr-grey-3);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 2px;
    bottom: 2px;
    background-color: var(--clr-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--clr-primary-3);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
export default CurrentTask;
