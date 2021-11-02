import React from "react";
import { Topbar, Sidebar } from "../components";
import styled from "styled-components";
import construct from "../images/undraw_QA_engineers_dg5p (1).svg";
import { Link } from "react-router-dom";
interface Props {
  component: JSX.Element;
}
const Software: React.FC<Props> = ({ component }) => {
  return (
    <Wrapper>
      <div className='mobile'>
        <h2>Sorry the app is only available on desktop or tablet for now!</h2>
        <img src={construct} alt='404' />
        <Link className='btn btn-important' to='/'>
          Back To Home
        </Link>
      </div>
      <Topbar />
      <Sidebar />
      {component}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "sidebar topbar"
    "sidebar interface";
  grid-template-rows: 70px 1fr;
  grid-template-columns: 15% 1fr;
  color: var(--clr-grey-4);
  transition: var(--transition);
  overflow: hidden;
  @media only screen and (min-width: 1600px) {
    grid-template-columns: 230px 1fr;
  }
  .mobile {
    display: none;
    position: absolute;
    background-color: white;
    z-index: 100;
    text-align: center;

    h2 {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    img {
      height: 250px;
    }

    a {
      margin-top: 3rem;
      margin-bottom: 3rem;
      background-color: var(--clr-primary-2);
      color: white;
    }
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Software;
