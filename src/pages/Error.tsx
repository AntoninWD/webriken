import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/undraw_page_not_found_su7k.svg";
const Error: React.FC = () => {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <h5>We couldn't find this page.</h5>
      <img className='logo' src={logo} alt='Webriken' />
      <Link className='btn btn-nav home' to='/'>
        Back to Home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  h1 {
    font-size: 5rem;
  }
  h5 {
    font-size: 2rem;
  }
  .logo {
    width: 600px;
    height: 450px;
    @media only screen and (max-width: 650px) {
      width: 300px;
      height: 250px;
    }
  }
  .home {
    background-color: var(--clr-primary-4);
    color: white;
    margin-top: 5rem;
    box-shadow: var(--shadow);
    :hover {
      background-color: var(--clr-primary-3);
    }
  }
`;
export default Error;
