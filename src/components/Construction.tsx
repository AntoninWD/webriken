import React from "react";
import styled from "styled-components";
import constructionImg from "../images/construction.svg";
const Construction: React.FC = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={constructionImg} alt='' />

        <p>
          Sorry, this feature is under construction. Please come back later to
          try it out!
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    width: 400px;
    height: 400px;
  }
  .container {
    padding: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
  }
  p {
    font-size: 2rem;
    color: var(--clr-font);
    font-weight: 600;
  }
`;
export default Construction;
