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
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;
export default Messenger;
