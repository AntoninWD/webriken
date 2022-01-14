import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const HomeDay: React.FC = () => {
  // Timer
  let time = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };

  setInterval(updateTime, 1000);

  // Weather
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(true);
  const weather = () => {
    try {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e5beec044342a56fe05f714e8ac77ce&units=metric`;

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.responseType = "json";
        request.send();
        request.onload = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
              setLoading(false);
              const res = request.response;
              const { icon } = res.weather[0];
              const temperature = res.main.temp;
              const temp = String(temperature).split(".")[0];
              setTemp(`${temp} °C`);
              setIcon(`http://openweathermap.org/img/wn/${icon}@2x.png`);
            }
          }
        };
      });
      return;
    } catch (err) {
      setLoading(true);
      console.log(err);
      throw err;
    }
  };
  useEffect(() => {
    weather();
    return () => {
      return setLoading(true);
    };
  }, []);

  return (
    <Wrapper>
      <div className='calendar-time'>
        <CalendarComponent className='calendar-container'></CalendarComponent>
        <div className='time-weather'>
          <div className='time'>
            <h3>{cTime}</h3>
          </div>
          {loading ? (
            <div className='weather loading'></div>
          ) : (
            <div className='weather'>
              <h2>{temp}</h2>
              <img src={icon} alt='' />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .calendar-time {
    grid-area: calendar;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 1rem;

    @media only screen and (max-width: 600px) {
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0;
      margin-left: 5%;
    }
  }
  .time-weather {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media only screen and (max-width: 1400px) {
      margin-left: 1%;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
  .time {
    padding: 1rem 2rem;
    border-radius: 5px;
    box-shadow: var(--shadow);
    border: 1px solid var(--clr-font-second);
    background-color: var(--clr-bcg);
    h3 {
      text-align: center;
      margin: 0;
    }
  }

  .weather {
    background-color: var(--clr-bcg);
    margin-top: 3rem;
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: var(--shadow);
    border: 1px solid var(--clr-font-second);
    height: fit-content;
    h2 {
      margin: 0;
      margin-right: 1rem;
    }

    @media only screen and (max-width: 600px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  .e-calendar {
    border-radius: 5px;
    box-shadow: var(--shadow);
    background-color: var(--clr-bcg);
    border: 1px solid var(--clr-font-second);
    height: fit-content;
  }
  .e-calendar .e-content td.e-today.e-selected span.e-day {
    background-color: var(--clr-primary-3);
    border: 1px solid var(--clr-primary-3);
  }

  .e-btn.e-flat.e-primary,
  .e-css.e-btn.e-flat.e-primary {
    color: var(--clr-primary-3);
  }

  .e-calendar .e-content td.e-selected span.e-day,
  .e-bigger.e-small .e-calendar .e-content td.e-selected span.e-day {
    background-color: var(--clr-primary-3);
  }

  .e-calendar:hover .e-content td.e-selected span.e-day,
  .e-bigger.e-small .e-calendar .e-content td.e-selected span.e-day {
    background-color: var(--clr-primary-3);
  }

  .e-calendar .e-content td.e-today span.e-day,
  .e-calendar .e-content td.e-focused-date.e-today span.e-day,
  .e-bigger.e-small .e-calendar .e-content td.e-today span.e-day,
  .e-bigger.e-small
    .e-calendar
    .e-content
    td.e-focused-date.e-today
    span.e-day {
    color: var(--clr-font);
    border: 1px solid var(--clr-primary-3);
  }
  .e-calendar .e-content td.e-focused-date.e-today span.e-day,
  .e-bigger.e-small
    .e-calendar
    .e-content
    td.e-focused-date.e-today
    span.e-day {
    background-color: var(--clr-bcg);
  }
  .e-calendar .e-footer-container,
  .e-bigger.e-small .e-calendar .e-footer-container {
    background-color: var(--clr-bcg);
  }

  .e-calendar .e-header .e-title,
  .e-bigger.e-small .e-calendar .e-header .e-title {
    color: var(--clr-font);
  }
  .e-calendar .e-content span,
  .e-bigger.e-small .e-calendar .e-content span {
    color: var(--clr-font);
  }
  .e-calendar th,
  .e-bigger.e-small .e-calendar th {
    color: var(--clr-font);
  }
  .e-calendar .e-header .e-date-icon-prev::before {
    color: var(--clr-font);
  }
  .e-calendar .e-header .e-date-icon-next::before {
    color: var(--clr-font);
  }
  .e-btn.e-primary:hover,
  .e-css.e-btn.e-primary:hover {
    background-color: #ffa60024;
  }
  .e-btn.e-primary:focus,
  .e-css.e-btn.e-primary:focus {
    background-color: #ffa60045;
  }

  .loading {
    width: 60px;
    height: 60px;
    padding: 3.5rem 7rem;
    display: flex;
  }
  .loading:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid hsl(0, 0%, 32%);
    border-color: var(--clr-primary-2) transparent var(--clr-primary-2);
    animation: lds-hourglass 1.2s infinite;
  }
`;
export default HomeDay;
