import React, { useState } from "react";
import { Topbar, Sidebar } from "../components";
import styled from "styled-components";

interface Props {
  component: JSX.Element;
}
const Software: React.FC<Props> = ({ component }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const sideBarHandler = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <Wrapper>
      <Topbar sideBarHandler={sideBarHandler} />
      <Sidebar sideBarOpen={sideBarOpen} sideBarHandler={sideBarHandler} />
      {component}
      <div
        className={sideBarOpen ? "overlay-open" : "overlay-close"}
        onClick={() => sideBarHandler()}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "sidebar topbar"
    "sidebar interface";
  grid-template-rows: 70px 1fr;
  grid-template-columns: 180px 1fr;
  color: var(--clr-grey-4);
  transition: var(--transition);
  overflow: hidden;
  position: relative;
  @media only screen and (min-width: 1300px) {
    grid-template-columns: 230px 1fr;
  }

  @media only screen and (max-width: 900px) {
    grid-template-areas:
      "topbar"
      "interface";
    grid-template-columns: 1fr;
  }
`;

export default Software;
