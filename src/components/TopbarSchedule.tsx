import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { topToolsContext } from "../context/topTools_context";

const TopbarSchedule: React.FC = () => {
  const { formValues } = useContext(topToolsContext);
  const [currentTime, setCurrentTime] = useState("");
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState("Inactive");
  const [schedule, setSchedule] = useState(false);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    getCurrentTime();
  }, []);

  useEffect(() => {
    if (formValues.length === 0 && active === false) return;
    if (formValues[0].startValue > "0") {
      setActive(true);
    }
    if (formValues[0].startValue === "0") {
      setActive(false);
    }

    formValues.forEach(({ title, startValue, endValue }) => {
      if (currentTime >= startValue && currentTime <= endValue) {
        setStatus(title);
        setSchedule(true);
      }
    });
  }, [formValues, currentTime, active]);

  useEffect(() => {
    if (schedule) {
      var audio = new Audio(
        "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
      );
      audio.play();
    }
  }, [status, schedule]);

  setInterval(() => {
    getCurrentTime();
  }, 60000);

  return (
    <Wrapper>
      <div className={active ? "show" : ""}>
        <h4>
          Status:
          <span className={status}>{status}</span>
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: schedule;

  div {
    display: flex;
    opacity: 0;
  }
  h4 {
    margin: 0 0.8rem;
    font-size: 1.1rem;
  }

  span {
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 20px;
    color: var(--clr-white);
    box-shadow: var(--light-shadow);
    background-color: var(--clr-offline);
  }
  .show {
    opacity: 1;
  }

  .Working {
    background-color: var(--clr-active);
  }

  .Break {
    background-color: var(--clr-busy);
  }

  .Lunch {
    background-color: var(--clr-break);
  }
`;
export default TopbarSchedule;
