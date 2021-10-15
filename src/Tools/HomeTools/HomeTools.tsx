import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { interfaceContext } from "../../context/interface_context";
const HomeTools: React.FC = () => {
  const { setMain } = useContext(interfaceContext);
  return (
    <Wrapper className='tools-wrapper'>
      <h2>Home</h2>
      <section className='container home top'>
        <div>
          <h4>Welcome to Webriken!</h4>
          <p>
            Webriken is designed to bring you tools that can help you be
            organized, productive, and motivated during your work.
          </p>
        </div>
      </section>

      <div className='container home'>
        <h4>Top Tools</h4>
        <div>
          <div>
            <ul>
              Schedule your day with your work schedule, break and lunch as easy
              you like. At the top of the page, you will be able to see your
              status!
            </ul>
            <ul>
              Get motivated and productive with the pomodoro Timer.
              <a href='https://todoist.com/fr/productivity-methods/pomodoro-technique'>
                Learn about pomodoro timer
              </a>
            </ul>
            <ul>
              Set a current task active so you and your contacts will be able to
              see on which task you are currently working.
            </ul>
          </div>
        </div>
      </div>

      <div className='container home'>
        <h4>Add tools</h4>
        <p>
          The main goal of this section is to have a vast selection of tools
          that you can add to your sidebar.
        </p>
        <div className='tools-list'>
          <div>
            <h5>Available</h5>
            <li>To-do List</li>
            <li>Post Tips</li>
          </div>
          <div>
            <h5>Not Available</h5>
            <li>Agenda</li>
            <li>Spotify</li>
            <li>Goals</li>
            <li>Group Chat</li>
          </div>
        </div>
        <Link
          to='/app/addtools'
          onClick={() => setMain("addtools")}
          className='link'>
          Go To Add Tools
        </Link>
      </div>

      <div className='container home tools'>
        <h4>Let us Know which tools you would like in the future!</h4>
        <div>
          <form action='submit'>
            <input type='text' placeholder='Tell us what you want!' />
            <button type='submit' className='btn-home'>
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 14px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--clr-grey-9);
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
  h2 {
    margin-left: 5%;
    margin-top: 2rem;
    position: absolute;
    left: 10%;
  }
  h4 {
    color: var(--clr-primary-3);
    margin-bottom: 2rem;
    font-size: 1.7rem;
    text-align: center;
  }
  h5 {
    margin: 1rem 0;
    font-size: 1.4rem;
  }
  p {
    color: var(--clr-font);
    opacity: 0.8;
  }

  .home {
    height: fit-content;
    margin: 2rem;
    padding: 4rem 2rem;
    width: 70%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
  }

  .top {
    margin-top: 6rem;
  }

  .tools {
    text-align: center;
    margin-top: 5rem !important;
    margin-bottom: 10rem !important;
  }

  p,
  ul {
    font-size: 1.3rem;
    opacity: 0.8;
    text-align: center;
  }

  a {
    color: var(--clr-primary-4);
  }

  .tools {
    margin-left: 30%;
    display: grid;
    margin: auto;
    input {
      border: 2px solid var(--clr-grey-3);
      border-radius: 5px;
      padding: 1rem;
      width: 20rem;
      margin-top: 2rem;
    }
    .btn-home {
      cursor: pointer;
      border: none;
      padding: 1.1rem;
      margin-left: 1rem;
      border-radius: 5px;
      display: inline-block;
      color: var(--clr-white);
      font-weight: 600;
      transition: var(--transition);
      background-color: var(--clr-grey-3);
      box-shadow: var(--shadow);
      @media screen and (max-width: 1100px) {
        margin-top: 2rem;
        margin-left: 2rem;
      }
      :hover {
        background-color: var(--clr-primary-2);
      }
    }
  }
  .tools-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    @media only screen and (max-width: 1300px) {
      display: block;
    }
    div {
      margin: 0 2rem;
    }
  }
  .link {
    cursor: pointer;
    border: none;
    padding: 0.8rem;
    border-radius: 5px;
    color: var(--clr-white);
    font-weight: 600;
    transition: var(--transition);
    background-color: var(--clr-grey-3);
    box-shadow: var(--shadow);
    :hover {
      background-color: var(--clr-primary-2);
    }
  }
`;
export default HomeTools;
