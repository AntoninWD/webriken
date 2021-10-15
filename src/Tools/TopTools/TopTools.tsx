import React from "react";
import styled from "styled-components";
import CurrentTask from "./CurrentTask";
import Pomodoro from "./Pomodoro";
import Schedule from "./Schedule";
const TopTools: React.FC = () => {
  return (
    <Wrapper>
      <h2>Top Tools</h2>
      <div className='container'>
        <div>
          <h4>
            Manage the main tools that will appear at the top of the page.
          </h4>
          <hr />
        </div>
        <div className='feature-section'>
          <div className='feature-container border'>
            <h3>Schedule</h3>
            <p>Set your today's schedule with your desired break.</p>
            <div className='tool-container'>
              <Schedule />
            </div>
          </div>
          <div className='feature-container border'>
            <h3>Pomodoro</h3>
            <p>Get motivated and productive with the Pomodoro timer!</p>
            <div className='tool-container'>
              <Pomodoro />
            </div>
          </div>
          <div className='feature-container'>
            <h3>Current Task</h3>
            <p>
              Let your teams and yourself see what you are currently working on.
            </p>
            <div className='tool-container'>
              <CurrentTask />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 67px;
  right: 0;
  width: calc(100vw - 230px);
  height: calc(100vh - 67px);
  background-color: var(--clr-bcg-second);
  transition: var(--transition);
  color: var(--clr-font);
  @media only screen and (max-width: 900px) {
    display: none;
  }
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    color: var(--clr-font);
    margin-left: 5px;
    padding: 0.5rem 0;
    font-size: 20px;
    text-transform: none;
  }
  .container {
    overflow-y: scroll;
  }

  .container::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  .container::-webkit-scrollbar {
    width: 14px;
    background-color: transparent;
  }

  .container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--clr-grey-9);
  }
  .feature-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem;
    @media only screen and (max-width: 1450px) {
      display: block;
    }
  }

  .feature-container {
    text-align: center;
    margin: 0.7rem;
    @media only screen and (max-width: 1450px) {
      margin-bottom: 6rem;
    }
  }
  .border {
    border-right: 1px solid var(--clr-primary-4);
    @media only screen and (max-width: 1450px) {
      border-right: none;
    }
  }

  p {
    font-size: 15px;
    color: var(--clr-font-second);
  }

  span {
    color: red;
  }
  input {
    font-family: inherit;
    cursor: pointer;
    border: 1px solid var(--clr-primary-4);
    border-radius: 5px;
    padding: 3px;
    margin: 0 7px;
    font: inherit;
    font-size: 13px;
    color: var(--clr-font-input);
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    background-color: var(--clr-bcg);
  }

  select {
    font-family: inherit;
    cursor: pointer;
    border: 1px solid var(--clr-primary-4);
    border-radius: 5px;
    padding: 3px;
    margin: 5px;
    font: inherit;
    font-size: 13px;
    background-color: var(--clr-bcg);
    color: var(--clr-font-input);
  }
  button {
    font: unset;
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    border: 2px solid var(--clr-font-input);
    padding: 5px;
    border-radius: 5px;
    color: var(--clr-primary-4);
    font-weight: 600;
    transition: var(--transition);
    margin: 1rem;
    background-color: var(--clr-bcg);
    :hover {
      border: 2px solid var(--clr-primary-4);
    }
  }
`;
export default TopTools;
