import React, { RefObject } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import shuriken from "../images/PinClipart.com_ninja-clipart-black-and_534303.png";
import tools from "../images/best-laptop-reddit.svg";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  features: RefObject<HTMLDivElement>;
}
const Hero: React.FC<Props> = ({ features }) => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper className='section-center'>
      <div className='info'>
        <h1>
          Your favorite weapons to grow <br /> web productivity.
        </h1>
        <p>Everything you need to improve your workflow.</p>
        <div>
          <button
            className='btn btn-features'
            onClick={() =>
              features.current?.scrollIntoView({ behavior: "smooth" })
            }>
            Our features
          </button>
          {isUser ? (
            <Link className='btn btn-important' to='/app/home'>
              Try it now
            </Link>
          ) : (
            <button className='btn btn-important' onClick={loginWithRedirect}>
              Try it now
            </button>
          )}
        </div>
      </div>
      <div className='design'>
        <img className='image-1' src={shuriken} alt='shuriken-img' />
        <img className='image-2' src={tools} alt='tools-img' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 5rem;
  height: calc(100vh - 10rem);
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
  h1 {
    line-height: 4rem;
  }

  .info {
    width: 60%;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
      width: 90%;
      justify-content: center;
      align-items: center;
    }
    p {
      margin-bottom: 3rem;
      color: var(--clr-grey-6);
      font-weight: 400;
    }
  }
  .btn-features {
    margin-right: 15px;
    background-color: var(--clr-grey-5);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    :hover {
      background-color: var(--clr-grey-6);
    }
  }
  .btn-important {
    background-color: var(--clr-primary-2);
    color: var(--clr-white);
    :hover {
      background-color: var(--clr-primary-3);
    }
  }

  .image-1 {
    position: absolute;
    top: -20rem;
    right: -29rem;
    z-index: -1;
    opacity: 0.9;

    @media screen and (max-width: 900px) {
      opacity: 0.5;
    }
  }
  .image-2 {
    position: absolute;
    top: 4rem;
    right: -5rem;
    z-index: -1;
    opacity: 1;
    height: 240px;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;
export default Hero;
