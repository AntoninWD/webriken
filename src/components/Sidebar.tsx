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
  position: absolute;
  width: 230px;
  height: calc(100vh);
  display: grid;
  border-right: 1px solid var(--clr-font-third);
  background-color: var(--clr-bcg);
  transition: var(--transition);
  grid-template-areas:
    "top "
    "tools"
    "profile";
  grid-template-rows: 225px 1fr 70px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export default Sidebar;
