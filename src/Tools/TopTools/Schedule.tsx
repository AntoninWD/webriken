import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { topToolsContext } from "../../context/topTools_context";
const Schedule: React.FC = () => {
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { scheduleHandler } = useContext(topToolsContext);
  const values = [
    {
      title: "Working",
      startRef: useRef<HTMLInputElement>(null),
      startValue: "0",
      endRef: useRef<HTMLInputElement>(null),
      endValue: "0",
    },
    {
      title: "First break",
      startRef: useRef<HTMLInputElement>(null),
      startValue: "0",
      endRef: useRef<HTMLInputElement>(null),
      endValue: "0",
    },
    {
      title: "Lunch",
      startRef: useRef<HTMLInputElement>(null),
      startValue: "0",
      endRef: useRef<HTMLInputElement>(null),
      endValue: "0",
    },
    {
      title: "Second Break",
      startRef: useRef<HTMLInputElement>(null),
      startValue: "0",
      endRef: useRef<HTMLInputElement>(null),
      endValue: "0",
    },
  ];

  type formValues = {
    title: string;
    startRef: React.RefObject<HTMLInputElement>;
    startValue: string | undefined;
    endRef: React.RefObject<HTMLInputElement>;
    endValue: string | undefined;
  };

  const handleFormError = (v: formValues[]) => {
    v.map((value) => {
      value.startValue = value.startRef.current?.value;
      value.endValue = value.endRef.current?.value;

      if (value.startValue && value.endValue !== undefined) {
        if (value.startValue >= value.endValue) {
          setFormError(true);
          setErrorMessage(
            "Please make sure the end time is higher than the start time."
          );
        }

        if (values[0].startValue && values[0].endValue !== undefined) {
          if (value.startValue < values[0].startValue) {
            if (value.title === "Work") {
              return value;
            } else {
              setFormError(true);
              setErrorMessage(
                "Please make sure your break and lunch are after your start work schedule."
              );
            }
          }

          if (value.endValue > values[0].endValue) {
            if (value.title === "Work") {
              return value;
            } else {
              setFormError(true);
              setErrorMessage(
                "Please make sure your break and lunch are before your end work schedule."
              );
            }
          }
        }
      }

      return value;
    });
  };

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form id='form' onSubmit={handleSubmit}>
        {/* WORK SCHEDULE  */}
        <div className='work-schedule'>
          <h5>
            Work schedule <span>*</span>
          </h5>
          <label htmlFor='work'>Start: </label>
          <input
            type='time'
            id='start-work'
            name='start-work'
            ref={values[0].startRef}
            required></input>
          <label htmlFor='work'>End:</label>
          <input
            type='time'
            id='end-work'
            name='end-work'
            ref={values[0].endRef}
            required></input>
        </div>

        {/* BREAK ONE  */}
        <div className='break-schedule'>
          <h5>Break one</h5>
          <label htmlFor='work'>Start: </label>
          <input
            type='time'
            id='start-break-one'
            name='start-break-one'
            ref={values[1].startRef}></input>
          <label htmlFor='work'>End:</label>
          <input
            type='time'
            id='end-break-one'
            name='end-break-one'
            ref={values[1].endRef}></input>
        </div>

        {/* LUNCH  */}
        <div className='Lunch-schedule'>
          <h5>lunch</h5>
          <label htmlFor='work'>Start: </label>
          <input
            type='time'
            id='start-lunch'
            name='start-lunch-'
            ref={values[2].startRef}></input>
          <label htmlFor='work'>End:</label>
          <input
            type='time'
            id='end-lunch'
            name='end-lunch'
            ref={values[2].endRef}></input>
        </div>

        {/* BREAK TWO  */}
        <div className='break-schedule'>
          <h5>Break two</h5>
          <label htmlFor='work'>Start: </label>
          <input
            type='time'
            id='start-break-two'
            name='start-break-two'
            ref={values[3].startRef}></input>
          <label htmlFor='work'>End:</label>
          <input
            type='time'
            id='end-break-two'
            name='end-break-two'
            ref={values[3].endRef}></input>
        </div>

        <div>
          <button
            type='submit'
            onClick={() => {
              setFormError(false);
              handleFormError(values);
              if (formError === false) {
                // send values to context
                scheduleHandler(values);
              }
            }}>
            Submit
          </button>
          <button
            type='reset'
            onClick={() => {
              scheduleHandler(values);
            }}>
            Reset
          </button>
          {formError && <p className='error'>{errorMessage}</p>}
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20% 0;
  @media only screen and (max-width: 1450px) {
    margin: 3rem 0;
  }
  div {
    margin: 0.8rem 0;
  }
  .error {
    color: red;
    opacity: 1;
    font-size: 12px;
  }
`;
export default Schedule;
