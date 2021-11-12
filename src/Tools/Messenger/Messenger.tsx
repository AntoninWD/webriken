import React from "react";
import styled from "styled-components";
import { Construction } from "../../components";
export const Messenger = () => {
  return (
    <Wrapper className='tools-wrapper'>
      <h2>Messenger</h2>
      <Construction />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;
export default Messenger;
