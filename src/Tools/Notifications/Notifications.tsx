import { Component } from "react";
import styled from "styled-components";
import { notificationsContext } from "../../context/notifications_context";
import NotificationList from "./NotificationList";

export default class Notifications extends Component<{}, {}, any> {
  render = () => (
    <Wrapper className='tools-wrapper'>
      <h2>Notifications</h2>
      <section className='container'>
        <div>
          <h5>Heres your notifications coming from others tools</h5>
          <hr />
        </div>
        <NotificationList props={this.context.notifications} />
      </section>
    </Wrapper>
  );
}
Notifications.contextType = notificationsContext;
const Wrapper = styled.div`
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  h5 {
    margin: 1rem;
  }

  p {
    margin: 0;
  }
}

`;
