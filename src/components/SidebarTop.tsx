import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Logo1-01.png";
import { notificationsContext } from "../context/notifications_context";
import { getCurrentDate } from "../Utils/utility";

type Props = {
  sideBarHandler: () => void;
  currentInterfaceHandler: (comp: string) => void;
  currentSideBar: any[];
};

const SidebarTop: React.FC<Props> = ({
  sideBarHandler,
  currentInterfaceHandler,
  currentSideBar,
}) => {
  const { notifications } = useContext(notificationsContext);
  const [notificationsCount, setNotificationsCount] = useState<number>(0);

  useEffect(() => {
    setNotificationsCount(
      notifications.filter(({ dueTime }: any) => {
        return dueTime < getCurrentDate() && dueTime !== "";
      }).length
    );
  }, [notifications]);

  return (
    <Wrapper>
      <div>
        <img src={logo} alt='Webriken' />
      </div>
      {currentSideBar
        .slice(0, 3)
        .map(({ text, component, icon, active }, i) => {
          // Selecting notifications for count
          if (text === "Notifications" && notificationsCount > 0) {
            return (
              <Link
                key={i}
                className={`${active ? "btn-app active" : "btn-app"}`}
                to={`/app/${component}`}
                onClick={() => {
                  sideBarHandler();
                  currentInterfaceHandler(component);
                }}>
                {icon}
                {text}
                <p className='count'> {notificationsCount}</p>
              </Link>
            );
          }
          //other btn...
          return (
            <Link
              key={i}
              className={`${active ? "btn-app active" : "btn-app"}`}
              to={`/app/${component}`}
              onClick={() => {
                currentInterfaceHandler(component);
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
    padding: 2px 6px;
    font-size: 0.6rem;
  }
`;
export default SidebarTop;
