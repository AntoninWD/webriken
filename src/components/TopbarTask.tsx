import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { topToolsContext } from "../context/topTools_context";

const TopbarTask: React.FC = () => {
  const { currentTask } = useContext(topToolsContext);

  useEffect(() => {
    localStorage.setItem("current-task", JSON.stringify(currentTask));
  }, [currentTask]);
  return (
    <Wrapper>
      <div className={currentTask ? "display" : ""}>
        <h4>
          <span>{currentTask}</span>
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: task;

  div {
    display: none;
  }
  .display {
    display: flex;
  }
  h4 {
    margin: 0 0.8rem;
    font-size: 1rem;
  }
  span {
    overflow-x: hidden;
    font-size: 1rem;
    margin: 0 0 0 5px;
    padding: 6px 10px;
    border-radius: 5px;
    color: var(--clr-white);
    box-shadow: var(--light-shadow);
    background-color: var(--clr-offline);
    @media only screen and (max-width: 650px) {
      font-size: 0.6rem;
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      color: var(--clr-font);
    }
  }
`;
export default TopbarTask;
