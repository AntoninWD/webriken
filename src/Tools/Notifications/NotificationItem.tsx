import { Component } from "react";
import styled from "styled-components";
import { getCurrentDate } from "../../Utils/utility";
import { Link } from "react-router-dom";
import { interfaceContext } from "../../context/interface_context";
type notificationsObj = {
  text: string;
  dueTime: string;
  from: string;
};

export default class NotificationItem extends Component<
  any,
  { [key: string]: any }
> {
  render = () => (
    <Wrapper>
      {this.props.props
        .filter(({ dueTime }: notificationsObj) => {
          return dueTime < getCurrentDate() && dueTime !== "";
        })
        .map(({ text, dueTime, from }: notificationsObj, i: number) => {
          return (
            <div key={i} className='notification'>
              <div className='notification-top'>
                <p>{text}</p>
                <div>
                  <p>From {from}</p>
                </div>
              </div>
              <hr />
              <div className='notification-bottom'>
                <p className='status'>Overdue</p>
                <p>Due: {dueTime}</p>
                <Link
                  to='/app/todolist'
                  onClick={() => {
                    this.context.setMain("todolist");
                  }}>
                  Change Date
                </Link>
              </div>
            </div>
          );
        })}
    </Wrapper>
  );
}
NotificationItem.contextType = interfaceContext;
const Wrapper = styled.div``;
