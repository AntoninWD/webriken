import React, { useState, useEffect } from "react";

type formValues = {
  title: string;
  startRef: React.RefObject<HTMLInputElement>;
  startValue: string;
  endRef: React.RefObject<HTMLInputElement>;
  endValue: string;
};

type mainContext = {
  formValues: formValues[];
  pomodoroTimer: boolean;
  scheduleHandler: (values: formValues[]) => void;
  pomodoroHandler: (work: number, pause: number) => void;
  pomodoroResetHandler: (work: number, pause: number) => void;
  min: string;
  sec: string;
  timeType: string;
  taskHandler: (task: string) => void;
  currentTask: string;
};

export const topToolsContext = React.createContext<mainContext>({
  formValues: [],
  pomodoroTimer: true,
  scheduleHandler: () => {},
  pomodoroHandler: () => {},
  pomodoroResetHandler: () => {},
  min: "",
  sec: "",
  timeType: "",
  taskHandler: () => {},
  currentTask: "",
});

const TopToolsContextProvider: React.FC = ({ children }) => {
  // handler & state here
  const [formValues, setFormValues] = useState<formValues[]>([]);
  const [pomodoroTimer, setPomodoroTimer] = useState(false);
  const [timeType, setTimeType] = useState("");
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [currentTask, setCurrentTask] = useState("");

  // Schedule
  const scheduleHandler = (values: formValues[]) => {
    setFormValues(values);
  };

  // Pomodoro

  const playAudio = () => {
    const audio = new Audio(
      "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
    );
    audio.play();
  };

  const timeData = function (time: number) {
    setMin(String(Math.trunc(time / 60)).padStart(2, "0"));
    setSec(String(time % 60).padStart(2, "0"));
  };

  useEffect(() => {
    if (pomodoroTimer === false) return;
    let newTime = time;
    timeData(newTime);
    const interval = setInterval(() => {
      newTime = newTime - 1;
      timeData(newTime);
      if (newTime === 0 && timeType === "Work") {
        setTimeType("Break");
        setTime(breakTime);
        playAudio();
      }
      if (newTime === 0 && timeType === "Break") {
        setTimeType("Work");
        setTime(workTime);
        playAudio();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [pomodoroTimer, time, breakTime, timeType, workTime]);

  const pomodoroHandler = (work: number, pause: number) => {
    setPomodoroTimer(true);
    setTimeType("Work");
    setTime(work * 60);
    setWorkTime(work * 60);
    setBreakTime(pause * 60);
  };

  const pomodoroResetHandler = () => {
    setPomodoroTimer(false);
  };

  // Current Task

  const taskHandler = (task: string) => {
    setCurrentTask(task);
  };

  const contextValue: mainContext = {
    formValues: formValues,
    pomodoroTimer: pomodoroTimer,
    scheduleHandler: scheduleHandler,
    pomodoroHandler: pomodoroHandler,
    pomodoroResetHandler: pomodoroResetHandler,
    min: min,
    sec: sec,
    timeType: timeType,
    taskHandler: taskHandler,
    currentTask: currentTask,
  };
  return (
    <topToolsContext.Provider value={contextValue}>
      {children}
    </topToolsContext.Provider>
  );
};

export default TopToolsContextProvider;
