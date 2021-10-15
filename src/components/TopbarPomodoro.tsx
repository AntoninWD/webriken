import React, { useContext } from "react";

import styled from "styled-components";
import { topToolsContext } from "../context/topTools_context";

const TopbarPomodoro: React.FC = () => {
  const { min, sec, pomodoroTimer, timeType } = useContext(topToolsContext);

  return (
    <Wrapper>
      <div className={pomodoroTimer === true ? "display" : ""}>
        <h4 className={timeType === "Work" ? "on" : "off"}>
          <span>{timeType}</span>
          <span>{`${min}:${sec}`}</span>
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: pomodoro;
  div {
    display: none;
  }

  .display {
    display: flex;
  }
  h4 {
    font-size: 1.1rem;
  }
  span {
    margin-right: 5px;
  }
  .on {
    margin: 0 10px;
    padding: 7px 10px;
    border-radius: 20px;
    color: var(--clr-white);
    box-shadow: var(--light-shadow);
    background-color: var(--clr-active);
  }
  .off {
    margin: 0 10px;
    padding: 7px 10px;
    border-radius: 20px;
    color: var(--clr-white);
    box-shadow: var(--light-shadow);
    background-color: var(--clr-busy);
  }
`;
export default TopbarPomodoro;
