import React, { useContext } from "react";
import styled from "styled-components";
import { topToolsContext } from "../context/topTools_context";

const TopbarTask: React.FC = () => {
  const { currentTask } = useContext(topToolsContext);
  return (
    <Wrapper>
      <div className={currentTask ? "display" : ""}>
        <h4>
          Current Task: <span>{currentTask}</span>
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
    font-size: 1.1rem;
  }
  span {
    font-size: 1rem;
    margin: 0 0 0 5px;
    padding: 5px 10px;
    border-radius: 20px;
    color: var(--clr-white);
    box-shadow: var(--light-shadow);
    background-color: var(--clr-font-second);
    @media only screen and (max-width: 1400px) {
      display: flex;
      margin: 0;
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;
export default TopbarTask;
