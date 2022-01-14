import React from "react";
import styled from "styled-components";
import Schedule from "../../components/Schedule";
const HomeSchedule: React.FC = () => {
  return (
    <Wrapper className='schedule'>
      <h4>Today's Schedule</h4>
      <Schedule />
    </Wrapper>
  );
};
const Wrapper = styled.div`
    grid-area: schedule;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: var(--shadow);
    background-color: var(--clr-bcg);
    border: 1px solid var(--clr-font-second);
    margin: 2rem 12%;
    h4,
    h5 {
      margin-top: 20px;
    }
    span {
      color: red;
    }
    @media only screen and (max-width: 600px) {
      margin: 2rem 1%;
  }
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
    padding: 5px 7px;
    border-radius: 5px;
    transition: var(--transition);
    margin: 0.5rem;
    margin-top: 1rem;

  
`;
export default HomeSchedule;
