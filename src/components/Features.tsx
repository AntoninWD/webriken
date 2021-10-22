import React, { RefObject } from "react";
import styled from "styled-components";
import img from "../images/undraw_Add_tasks_re_s5yj (1).svg";

interface Props {
  features: RefObject<HTMLDivElement>;
}

const Features: React.FC<Props> = ({ features }) => {
  return (
    <Wrapper className='section-center' ref={features}>
      <hr />
      <div className='features'>
        <div className='features-list'>
          <h1>Our Features</h1>
          <ul className='list'>
            <li>Schedule</li>
            <li>Pomodoro Timer</li>
            <li>Goals</li>
            <li>Post Tips</li>
            <li>To-do List</li>
            <li>Project Management</li>
            <li className='important'> + And More </li>
          </ul>
        </div>
        <div className=' features-content'>
          <img className='features-img' src={img} alt='features' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 15rem;
  h1 {
    margin-bottom: 4rem;
    text-align: left;
    @media screen and (max-width: 900px) {
      text-align: center;
    }
  }
  .features {
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 900px) {
      display: block;
      text-align: center;
    }
  }

  .features-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .features-img {
    margin-left: 7rem;
    height: 350px;
    @media screen and (max-width: 1100px) {
      height: 250px;
    }
    @media screen and (max-width: 900px) {
      height: 160px;
      margin-left: 0;
      margin-top: 5rem;
    }
  }

  .list {
    text-align: left;
    @media screen and (max-width: 900px) {
      text-align: center;
    }
  }
  li {
    margin: 1.5rem 0;
    font-weight: 600;
    opacity: 0.5;
    font-size: 1.2rem;
  }

  .important {
    opacity: 1;
    color: var(--clr-secondary-3);
    margin-top: 3rem;
    margin-left: 1.5rem;
  }
`;
export default Features;
