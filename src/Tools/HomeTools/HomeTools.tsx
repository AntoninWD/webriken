import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import HomeDay from "./HomeDay";
import HomeStats from "./HomeStats";
import HomeSchedule from "./HomeSchedule";
import HomeTask from "./HomeTask";

const HomeTools: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper className='tools-wrapper'>
      {isUser && user?.nickname && (
        <h3>
          Welcome, <span> {user.nickname.split(" ")[0]} </span>
        </h3>
      )}

      <section className='home-container'>
        <HomeDay />
        <HomeStats />
        <HomeSchedule />
        <HomeTask />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-left: 0;
  padding-right: 2%;
  padding-bottom: 1rem;
  @media only screen and (max-width: 1400px) {
    padding: 1%;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
  h3 {
    margin-top: 1rem;
  }
  .home-container {
    display: grid;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    grid-template-areas:
      "calendar stats"
      "schedule task";

    grid-template-rows: fit-content 1fr;
    grid-template-columns: 50% 50%;
    @media only screen and (max-width: 1150px) {
      display: block;
      padding: 0 10%;
    }
  }
`;
export default HomeTools;
