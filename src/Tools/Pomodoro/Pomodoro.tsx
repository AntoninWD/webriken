import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { topToolsContext } from "../../context/topTools_context";
import { Link } from "react-router-dom";
import { mainTools } from "../../data/interfaceTools";
import { addToolsContext } from "../../context/tools_context";
let select: string[] = [];
for (let i = 1; i <= 200; i++) {
  if (i === 1) {
    select.push(`${i} minute`);
    i++;
  }
  select.push(`${i} minutes`);
}

const Pomodoro: React.FC = () => {
  const { pomodoroHandler, pomodoroResetHandler } = useContext(topToolsContext);
  const workTime = useRef<HTMLSelectElement>(null);
  const pauseTime = useRef<HTMLSelectElement>(null);
  const [work, setWork] = useState(0);
  const [pause, setPause] = useState(0);

  const { removeTool, activeToolsHandler } = useContext(addToolsContext);

  const handleResults = () => {
    if (workTime.current && pauseTime.current !== null) {
      const w = Number(workTime.current.value.split(" ")[0]);
      const p = Number(pauseTime.current.value.split(" ")[0]);
      setWork(w);
      setPause(p);
    }
  };
  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    pomodoroHandler(work, pause);
  };
  return (
    <Wrapper className='tools-wrapper'>
      <h2>Pomodoro Timer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='work'>Work duration:</label>
          <select name='work' id='work' ref={workTime} required>
            {select.map((e, id) => {
              return (
                <option key={id} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor='break'>Break duration:</label>
          <select name='break' id='break' ref={pauseTime} required>
            {select.map((e, id) => {
              return (
                <option key={id} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            type='submit'
            onClick={() => {
              handleResults();
            }}>
            Start
          </button>

          <button
            type='reset'
            onClick={() => {
              setWork(0);
              setPause(0);
              pomodoroResetHandler(work, pause);
            }}>
            Reset
          </button>
        </div>
      </form>
      <Link
        to='/app/home'
        className='remove-tool'
        onClick={() => {
          removeTool("Pomodoro");
          activeToolsHandler("pomodoro");
          mainTools[0].active = true;
        }}>
        Remove tool
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 1rem 0;
    text-align: center;
  }
  label {
    margin-right: 5px;
    font-weight: 600;
  }
  select {
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    padding: 2px;
    box-shadow: var(--light-shadow);
  }
  button {
    margin-top: 2rem;
    border-radius: 5px;
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    color: var(--clr-white);
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border: none;
    font: inherit;
    margin: 1rem;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
  }
`;
export default Pomodoro;
