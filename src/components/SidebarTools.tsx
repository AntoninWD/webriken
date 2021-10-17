import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { interfaceContext } from "../context/interface_context";
import { addToolsContext } from "../context/tools_context";
import { mainTools } from "../data/interfaceTools";

import { FaTrophy, FaClipboardList, FaMusic, FaBookOpen } from "react-icons/fa";
import { GiStarShuriken, GiTalk } from "react-icons/gi";

import { GoPin } from "react-icons/go";

const SidebarTools: React.FC = () => {
  const { setMain, mainComponent } = useContext(interfaceContext);
  const { tools } = useContext(addToolsContext);
  const toolsBtn = mainTools.slice(3, 4);
  return (
    <Wrapper>
      {toolsBtn.map(({ text, component, active }, i) => {
        return (
          <Link
            to={`/app/${component}`}
            key={i}
            className={`${
              mainComponent === component || active
                ? "btn-app active addToolBtn "
                : "btn-app addToolBtn"
            }`}
            onClick={() => {
              setMain(component);
            }}>
            <GiStarShuriken />
            {text}
          </Link>
        );
      })}
      <hr className='bar' />
      <div className='tools'>
        {tools.map(({ component, text }, i) => {
          let logo;
          if (component === "posttips") {
            logo = <GoPin />;
          }
          if (component === "todolist") {
            logo = <FaClipboardList />;
          }
          if (component === "spotify") {
            logo = <FaMusic />;
          }
          if (component === "groupchat") {
            logo = <GiTalk />;
          }
          if (component === "agenda") {
            logo = <FaBookOpen />;
          }
          if (component === "goals") {
            logo = <FaTrophy />;
          }
          return (
            <Link
              to={`/app/${component}`}
              key={i}
              className={`${
                mainComponent === component ? "btn-app active" : "btn-app"
              }`}
              onClick={() => {
                setMain(component);
              }}>
              {logo}
              {text}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 1rem;
  grid-area: tools;
  position: relative;

  @media only screen and (max-height: 700px) {
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background-color: var(--clr-grey-9);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--clr-grey-6);
    }
  }
  .addToolBtn {
    position: relative;
    margin-left: 40px;
    padding: 5px;
    padding-left: 7px;
    margin-bottom: 1.2rem;
    border-radius: 5px;
    box-shadow: rgba(58, 58, 58, 0.246) 0px 5px 10px;
    width: 50%;
    border: 2px solid var(--clr-primary-4);
    svg {
      height: 20px;
      position: absolute;
      right: 0;
    }
  }

  svg {
    margin-right: 10px;
    pointer-events: none;
  }

  .tools {
    margin: 22px 0;
  }
`;
export default SidebarTools;
