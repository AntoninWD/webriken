import React from "react";
import styled from "styled-components";
import SidebarTop from "./SidebarTop";
import SidebarTools from "./SidebarTools";
import SidebarProfile from "./SidebarProfile";
type Props = {
  sideBarOpen: boolean;
  sideBarHandler: () => void;
};
const Sidebar: React.FC<Props> = ({ sideBarOpen, sideBarHandler }) => {
  return (
    <Wrapper className={sideBarOpen ? "sidebar-open" : "sidebar-close"}>
      <SidebarTop sideBarHandler={sideBarHandler} />
      <SidebarTools sideBarHandler={sideBarHandler} />
      <SidebarProfile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: sidebar;
  display: grid;
  background-color: var(--clr-grey-1);
  transition: var(--transition);
  grid-template-areas:
    "top "
    "tools"
    "profile";
  grid-template-rows: 210px 1fr 70px;
  box-shadow: var(--dark-shadow);
  z-index: 100;

  @media only screen and (max-width: 1350px) {
    font-size: 80%;
  }

  @media only screen and (max-width: 900px) {
    position: absolute;
    left: -50px;
    height: 100vh;
    width: 200px;
    font-size: 100%;
    transition: var(--transition);
  }
`;
export default Sidebar;
