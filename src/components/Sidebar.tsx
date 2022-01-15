import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import SidebarTop from "./SidebarTop";
import SidebarTools from "./SidebarTools";
import SidebarProfile from "./SidebarProfile";
import { mainTools } from "../data/interfaceTools";
import { addToolsContext } from "../context/tools_context";
type Props = {
  sideBarOpen: boolean;
  sideBarHandler: () => void;
};
const Sidebar: React.FC<Props> = ({ sideBarOpen, sideBarHandler }) => {
  const { tools } = useContext(addToolsContext);
  const sideBarMenu = [...mainTools, ...tools];
  const [currentSideBar, setCurrentSideBar] = useState(sideBarMenu);
  useEffect(() => {
    const resetTools = tools.map((e) => {
      e.active = false;
      return e;
    });
    setCurrentSideBar([...mainTools, ...resetTools]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setCurrentSideBar([...mainTools, ...tools]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tools]);
  const currentInterfaceHandler = (comp: string) => {
    const newSidebar = currentSideBar.map((e) => {
      if (comp === e.component) {
        e.active = true;
        return e;
      } else {
        e.active = false;
        return e;
      }
    });
    setCurrentSideBar(newSidebar);
  };
  return (
    <Wrapper className={sideBarOpen ? "sidebar-open" : "sidebar-close"}>
      <SidebarTop
        sideBarHandler={sideBarHandler}
        currentInterfaceHandler={currentInterfaceHandler}
        currentSideBar={currentSideBar}
      />
      <SidebarTools
        sideBarHandler={sideBarHandler}
        currentInterfaceHandler={currentInterfaceHandler}
        currentSideBar={currentSideBar}
      />
      <SidebarProfile currentInterfaceHandler={currentInterfaceHandler} />
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
