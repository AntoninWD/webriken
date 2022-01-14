import { Component } from "react";
import styled from "styled-components";

import { getCurrentDate } from "../../Utils/utility";
import notificationsImg from "../../images/undraw_push_notifications_re_t84m.svg";
import NotificationItem from "./NotificationItem";

type notificationsObj = {
  text: string;
  dueTime: string;
  from: string;
};

interface Props {
  props: notificationsObj[];
}

class NotificationList extends Component<Props, { [key: string]: any }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      updatedNotifications: [],
    };
  }

  componentDidMount() {
    this.setState({
      updatedNotifications: this.props.props,
    });
  }

  render() {
    return (
      <Wrapper>
        {this.state.updatedNotifications.filter(
          ({ dueTime }: notificationsObj) => {
            return dueTime < getCurrentDate() && dueTime !== "";
          }
        ).length === 0 ? (
          <div className='empty-notification'>
            <h3>No notifications yet!</h3>
            <img src={notificationsImg} alt='no notifications' />
          </div>
        ) : (
          <NotificationItem props={this.state.updatedNotifications} />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .notification {
    width: 90%;
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    margin-left: 5%;
    margin-top: 1rem;
    border: 1px solid rgba(58, 58, 58, 0.096);
    border-radius: 5px;
    background-color: var(--clr-bcg-second);

    p {
      color: var(--clr-font);
    }

    .notification-top {
      position: relative;
      display: flex;
      padding: 10px;
      div {
        position: absolute;
        right: 0;
        top: 0;
        background-color: var(--clr-bcg);
        padding: 4px 7px;
        border-radius: 5px;
      }
    }
    .notification-bottom {
      display: flex;
      background-color: rgba(255, 63, 63, 0.63);
      padding: 5px 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      justify-content: space-between;
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      .status {
        font-weight: 600;
      }
    }
  }
  a {
    color: var(--clr-font);
  }
  .empty-notification {
    text-align: center;
    h3 {
      margin: 2rem 0;
    }
    img {
      height: 150px;
      margin: 2rem;
      @media only screen and (max-width: 500px) {
        height: 100px;
      }
    }
  }
`;
export default NotificationList;
