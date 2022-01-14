import React from "react";
import styled from "styled-components";
import { CgMenuLeft } from "react-icons/cg";

type Props = {
  sideBarHandler: () => void;
};

const TopbarMenu: React.FC<Props> = ({ sideBarHandler }) => {
  return (
    <Wrapper>
      <CgMenuLeft className='menu' onClick={() => sideBarHandler()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }

  .menu {
    display: block;
    color: var(--clr-font);
    height: 50px;
    width: 50px;
    margin: 0;
    cursor: pointer;
  }
`;

export default TopbarMenu;
