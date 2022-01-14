import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { interfaceContext } from "../context/interface_context";
import { mainTools } from "../data/interfaceTools";
import logo from "../images/Logo1-01.png";
import { notificationsContext } from "../context/notifications_context";
import { getCurrentDate } from "../Utils/utility";
type Props = {
  sideBarHandler: () => void;
};

const SidebarTop: React.FC<Props> = ({ sideBarHandler }) => {
  const { setMain, mainComponent } = useContext(interfaceContext);
  const { notifications } = useContext(notificationsContext);
  const [notificationsCount, setNotificationsCount] = useState<number>(0);

  useEffect(() => {
    setNotificationsCount(
      notifications.filter(({ dueTime }: any) => {
        return dueTime < getCurrentDate() && dueTime !== "";
      }).length
    );
  }, [notifications]);
  const topTools = mainTools.slice(0, 3);
  return (
    <Wrapper>
      <div>
        <img src={logo} alt='Webriken' />
      </div>
      {topTools.map(({ text, component, icon, active }, i) => {
        if (text === "Notifications" && notificationsCount > 0) {
          return (
            <Link
              key={i}
              className={`${
                mainComponent === component || active
                  ? "btn-app active"
                  : "btn-app"
              }`}
              to={`/app/${component}`}
              onClick={() => {
                setMain(component);
                sideBarHandler();
              }}>
              {icon}
              {text}
              <p className='count'> {notificationsCount}</p>
            </Link>
          );
        }
        return (
          <Link
            key={i}
            className={`${
              mainComponent === component || active
                ? "btn-app active"
                : "btn-app"
            }`}
            to={`/app/${component}`}
            onClick={() => {
              setMain(component);
              sideBarHandler();
            }}>
            {icon}
            {text}
          </Link>
        );
      })}

      <hr className='bar' />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  grid-area: top;

  svg {
    margin-right: 10px;
    pointer-events: none;
  }
  img {
    height: 70px;
    margin-top: 5px;
  }

  hr {
    margin-top: 1rem;
  }
  .count {
    margin: 0;
    margin-left: 10px;
    color: white;
    background-color: var(--clr-busy);
    border-radius: 35px;
    padding: 4px 10px;
    font-size: 0.7rem;
  }
`;
export default SidebarTop;
