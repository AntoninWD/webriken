import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaTrophy, FaClipboardList, FaMusic, FaBookOpen } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { GoPin } from "react-icons/go";

type Props = {
  sideBarHandler: () => void;
  currentInterfaceHandler: (comp: string) => void;
  currentSideBar: any[];
};

const SidebarTools: React.FC<Props> = ({
  sideBarHandler,
  currentInterfaceHandler,
  currentSideBar,
}) => {
  return (
    <Wrapper>
      {currentSideBar.slice(3, 4).map(({ text, component, active }, i) => {
        return (
          <Link
            to={`/app/${component}`}
            key={i}
            className={`${
              active ? "btn-app active addToolBtn " : "btn-app addToolBtn"
            }`}
            onClick={() => {
              sideBarHandler();
              currentInterfaceHandler(component);
            }}>
            {text}
          </Link>
        );
      })}
      <hr className='bar' />
      <div className='tools'>
        {currentSideBar.slice(4).map(({ component, text, active }, i) => {
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

          if (component === "agenda") {
            logo = <FaBookOpen />;
          }
          if (component === "goals") {
            logo = <FaTrophy />;
          }
          if (component === "pomodoro") {
            logo = <RiTimerFill />;
          }
          return (
            <Link
              to={`/app/${component}`}
              key={i}
              className={`${active ? "btn-app active" : "btn-app"}`}
              onClick={() => {
                sideBarHandler();
                currentInterfaceHandler(component);
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
  grid-area: tools;
  position: relative;
  margin-top: 1rem;
  @media only screen and (max-height: 700px) {
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: transparent;
    }
  }
  .addToolBtn {
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    border-radius: 5px;
    margin-left: 20%;
    background: rgb(238, 106, 5);
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    box-shadow: rgba(58, 58, 58, 0.246) 0px 5px 10px;
    width: fit-content;
    font-size: 0.9rem;
    color: var(--clr-white) !important;
    @media only screen and (max-width: 1350px) {
      margin: 0;
      margin-left: 15%;
      margin-bottom: 0.9rem;
      font-size: 0.8rem;
      padding: 5px 20px;
      margin-top: 0.3rem;
    }
    @media only screen and (max-width: 1150px) {
      margin-bottom: 0.9rem;
      margin-left: auto;
      margin-right: auto;
      padding: 5px 15px;
    }
    @media only screen and (max-width: 900px) {
      margin-top: 1rem;
    }

    @media only screen and (max-width: 800px) {
      margin-top: 0.7rem;
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
