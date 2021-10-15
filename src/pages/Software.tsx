import React from "react";
import { Topbar, Sidebar } from "../components";
import styled from "styled-components";
import construct from "../images/undraw_QA_engineers_dg5p (1).svg";
import { Link } from "react-router-dom";

const Software: React.FC = () => {
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-bcg);
  color: var(--clr-grey-4);
  transition: var(--transition);
  button {
    background-color: var(--clr-bcg);
  }
  svg {
    transition: var(--transition);
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
