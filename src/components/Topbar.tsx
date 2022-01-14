import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { topToolsContext } from "../context/topTools_context";
import { FcPrevious, FcNext } from "react-icons/fc";
import {
  TopbarMenu,
  TopbarSchedule,
  TopbarPomodoro,
  TopbarTask,
} from "../components";

type Props = {
  sideBarHandler: () => void;
};

const Topbar: React.FC<Props> = ({ sideBarHandler }) => {
  const topBarItems = [<TopbarSchedule />, <TopbarPomodoro />, <TopbarTask />];
  const [topbarIndex, setTobarIndex] = useState(0);

  const [topbarActive, setTobarActive] = useState(false);
  const { pomodoroTimer, formValues, currentTask } =
    useContext(topToolsContext);

  const tobarIndexHandler = (index: number) => {
    if (index < 0) {
      return setTobarIndex(topBarItems.length - 1);
    }
    if (index > topBarItems.length - 1) {
      return setTobarIndex(0);
    } else {
      return setTobarIndex(index);
    }
  };

  useEffect(() => {
    if (formValues[0]) {
      if (
        formValues[0].startValue === "0" &&
        pomodoroTimer === false &&
        currentTask === ""
      ) {
        return setTobarActive(false);
      }
    }

    if (
      pomodoroTimer === false &&
      formValues[0] === undefined &&
      currentTask === ""
    ) {
      return setTobarActive(false);
    } else {
      return setTobarActive(true);
    }
  }, [currentTask, formValues, pomodoroTimer]);
  return (
    <Wrapper>
      <TopbarMenu sideBarHandler={sideBarHandler} />
      <div className={topbarActive ? "mobile-topbar" : "topbar-invisible"}>
        <FcPrevious onClick={() => tobarIndexHandler(topbarIndex - 1)} />
        {topBarItems[topbarIndex]}
        <FcNext onClick={() => tobarIndexHandler(topbarIndex + 1)} />
      </div>
      <div className='top-app'>
        <TopbarSchedule />
        <TopbarPomodoro />
        <TopbarTask />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: topbar;
  padding: 0 15px 0 20px;
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  background-color: var(--clr-bcg-second);
  transition: var(--transition);
  border-bottom: 1px solid var(--clr-font-second);
  box-shadow: var(--very-light-shadow);
  z-index: 1;
  polygon,
  svg {
    fill: var(--clr-font);
    cursor: pointer;
    font-size: 1.5rem;
  }
  .top-app {
    display: inline-grid;
    grid-template-areas: "schedule pomodoro task";
    grid-template-columns: 1fr max-content 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    h4 {
      margin: 0;
    }
    @media only screen and (max-width: 1500px) {
      grid-template-columns: 1fr max-content 1.5fr;
    }
    @media only screen and (max-width: 1200px) {
      grid-template-columns: 1fr max-content max-content;
    }
    @media only screen and (max-width: 900px) {
      grid-template-areas: "menu schedule pomodoro task";
      grid-template-columns: max-content 1fr max-content max-content;
    }
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  .mobile-topbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 0 1rem;
    @media only screen and (min-width: 900px) {
      display: none;
    }
  }

  .topbar-invisible {
    display: none;
  }
`;
export default Topbar;
