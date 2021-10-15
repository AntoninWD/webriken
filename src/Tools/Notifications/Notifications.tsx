import React from "react";
import styled from "styled-components";
import { Construction } from "../../components";
const Notifications: React.FC = () => {
  return (
    <Wrapper className='tools-wrapper'>
      <h2>Notifications</h2>
      {/* <section className='container'> */}
      <Construction />
      {/* <div>
          <h5>
            Heres your notifications coming from others tools, you can manage
            them of just create new notifications.
          </h5>
          <hr />
        </div> */}
      {/* <section>
          {notifications.map((e, i) => {
            return (
              <div key={i} className='notification'>
                <div className='notification-top'>
                  <p>{e}</p>
                  <div>
                    <p>From To-Do List</p>
                  </div>
                </div>
                <hr />
                <div className='notification-bottom'>
                  <p className='state'>Overdue</p>
                  <p>Due date: 19/04/2022</p>
                  <button>Reschedule</button>
                </div>
              </div>
            );
          })}
        </section> */}
      {/* </section> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  /* h5 {
    margin: 1rem;
  }

  p {
    margin: 0;
  }

  .notification {
    width: 90%;
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    margin-left: 5%;
    margin-top: 1rem;
    border: 1px solid rgba(58, 58, 58, 0.096);
    border-radius: 5px;
    .notification-top {
      position: relative;
      display: flex;
      padding: 10px;
      div {
        position: absolute;
        right: 0;
        top: 0;
        background-color: var(--clr-font-second);
        padding: 4px 7px;
        border-radius: 5px;
        p {
          color: var(--clr-bcg);
        }
      }
    }
    .notification-bottom {
      display: flex;
      background-color: rgba(255, 167, 167, 0.424);
      padding: 5px 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      justify-content: space-between;
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      .state {
        font-weight: 600;
      }
    }
  } */
`;
export default Notifications;
