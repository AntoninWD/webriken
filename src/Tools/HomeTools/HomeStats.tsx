import React from "react";
import styled from "styled-components";
const HomeStats: React.FC = () => {
  return (
    <Wrapper className='stats'>
      <article>
        <h5>My Login Streak</h5>
        {/* check for the number of login streak in total */}
        <div>
          <h2>1</h2>
        </div>
      </article>
      <article>
        <h5>Todo's Completed</h5>
        {/* push in a new array the number of todos completed. */}
        <h2>0</h2>
      </article>
      <article>
        <h5>Goals Achieved</h5>
        {/* push in a new array the number of Goals done. */}
        <h2>0</h2>
      </article>
      <article>
        <h5>Agenda Events Today</h5>
        {/* check for the number of events in Agenda */}
        <h2>0</h2>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  h2 {
    margin: 0;
    margin-top: 30px;
    color: var(--clr-primary-4);
  }
  article {
    background-color: var(--clr-bcg);
    position: relative;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    box-shadow: var(--shadow);
    border: 1px solid var(--clr-font-second);
    width: 15rem;
  }
`;
export default HomeStats;
