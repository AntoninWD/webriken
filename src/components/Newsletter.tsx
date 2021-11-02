import React from "react";
import styled from "styled-components";
import img from "../images/undraw_Personal_email_re_4lx7 (1).svg";
const Newsletter: React.FC = () => {
  return (
    <Wrapper className='section-center'>
      <hr />
      <div className='newsletter'>
        <img src={img} alt='email' />

        <div className='content'>
          <h1>Sign up to our newsletter</h1>
          <form>
            <input
              type='email'
              placeholder='Enter your email address'
              required
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 15rem;
  .newsletter {
    margin-top: 15rem;
    display: flex;
    @media screen and (max-width: 900px) {
      display: block;
      text-align: center;
    }
  }
  img {
    height: 250px;
    @media screen and (max-width: 900px) {
      margin-bottom: 4rem;
    }
  }
  .content {
    margin-left: 30%;
    display: grid;
    margin: auto;
    input {
      border: 2px solid var(--clr-secondary-1);
      border-radius: 5px;
      padding: 1rem;
      width: 20rem;
      margin-top: 2rem;
    }
    button {
      cursor: pointer;
      border: none;
      padding: 1.1rem;
      margin-left: 1rem;
      border-radius: 5px;
      display: inline-block;
      color: var(--clr-white);
      font-weight: 600;
      transition: var(--transition);
      background-color: var(--clr-secondary-1);
      box-shadow: rgba(236, 99, 99, 0.52) 0px 5px 10px;
      @media screen and (max-width: 900px) {
        margin-top: 2rem;
        margin-left: 0;
      }
      @media screen and (max-width: 450px) {
        float: right;
        margin-top: 5px;
        margin-right: 2.5rem;
      }
      :hover {
        background-color: var(--clr-secondary-2);
      }
    }
  }
`;
export default Newsletter;
