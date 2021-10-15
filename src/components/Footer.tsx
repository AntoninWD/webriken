import React from "react";
import styled from "styled-components";
import logo from "../images/Logo_preview-01-removebg-preview (1).png";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <Wrapper>
      <div className='content'>
        <img src={logo} alt='webriken' />
        <div className='info'>
          <div className='socials'>
            <a href='www.twitter.com'>
              <FaTwitter className='icon' />
            </a>
            <a href='www.facebook.com'>
              <FaFacebook className='icon' />
            </a>
            <a href='www.linkedin.com'>
              <FaLinkedin className='icon' />
            </a>
          </div>
          <div className='copy'>
            <p>
              © Copyright by{" "}
              <a className='name-link' href='https://www.antoninarsenault.com'>
                {" "}
                Antonin Arsenault
              </a>
              , Webriken{" "}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-primary-2);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 15%;
    @media screen and (max-width: 900px) {
      display: block;
      text-align: center;
    }
  }
  .info {
    margin-top: 4rem;
    text-align: center;
  }
  img {
    height: 200px;
    @media screen and (max-width: 900px) {
      height: 150px;
    }
  }
  a {
    color: var(--clr-white);
    margin: 0.6rem;

    svg {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: var(--clr-white);
    margin-top: 3rem;
  }

  .name-link {
    margin: 0;
    :hover {
      color: var(--clr-grey-4);
    }
  }
`;
export default Footer;
