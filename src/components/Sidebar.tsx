import React from "react";
import styled from "styled-components";
import SidebarTop from "./SidebarTop";
import SidebarTools from "./SidebarTools";
import SidebarProfile from "./SidebarProfile";

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <SidebarTop />
      <SidebarTools />
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
  @media only screen and (max-width: 900px) {
    display: none;
  }

  box-shadow: var(--dark-shadow);
  z-index: 100;

  @media only screen and (max-width: 1350px) {
    font-size: 80%;
  }
`;
export default Sidebar;
