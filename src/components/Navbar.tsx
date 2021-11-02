import React from "react";
import logo from "../images/Logo1-01_-_Copy-removebg-preview.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      <div className='nav section-center'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Webriken' />
        </Link>
        <div>
          {isUser && user?.nickname && (
            <h5>
              Welcome <strong>{user.nickname.split(" ")[0]}</strong>
            </h5>
          )}
          {isUser ? (
            <div>
              <Link className='btn btn-nav' to='app/home'>
                Go to app
              </Link>
              <button
                className='btn btn-nav logout'
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}>
                Logout
              </button>
            </div>
          ) : (
            <button className='btn btn-nav' onClick={loginWithRedirect}>
              Login / Sign up
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  h5 {
    margin-left: 0.5rem;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 90vw;
    margin: 0 auto;
  }
  img {
    height: 120px;
    @media screen and (max-width: 900px) {
      height: 90px;
    }
  }

  .btn-nav {
    box-shadow: rgba(49, 44, 39, 0.192) 0px 5px 10px;
    margin: 0.5rem;
    :hover {
      background-color: var(--clr-primary-3);
      color: var(--clr-white);
    }
  }

  .logout {
    background-color: var(--clr-grey-2);
    color: white;
    :hover {
      background-color: var(--clr-grey-3);
    }
  }
`;
export default Navbar;
