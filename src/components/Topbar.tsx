import React from "react";
import styled from "styled-components";
import { TopbarSchedule, TopbarPomodoro, TopbarTask } from "../components";

const Topbar: React.FC = () => {
  return (
    <Wrapper>
      <div className='top-app'>
        <TopbarSchedule />
        <TopbarPomodoro />
        <TopbarTask />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 15px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 230px);
  height: 67px;
  float: right;
  background-color: var(--clr-bcg);
  transition: var(--transition);
  border-bottom: 1px solid var(--clr-font-third);
  @media only screen and (max-width: 900px) {
    display: none;
  }

  .top-app {
    display: inline-grid;
    grid-template-areas: "schedule pomodoro task";
    grid-template-columns: 1fr 1fr 1fr;
    width: 120rem;
    justify-items: center;
    align-items: center;

    h4 {
      margin: 0;
    }
  }
`;
export default Topbar;