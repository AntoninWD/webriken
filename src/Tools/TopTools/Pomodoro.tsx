import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { topToolsContext } from "../../context/topTools_context";
let select: any[] = [];
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
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40% 0;
  @media only screen and (max-width: 1450px) {
    margin: 3rem 0;
  }
  div {
    margin: 1rem 0;
  }
  label {
    margin-right: 5px;
    font-weight: 600;
  }
  select {
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
  }
  button {
    margin-top: 2rem;
  }
`;
export default Pomodoro;
