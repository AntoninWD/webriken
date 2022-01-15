import { Component } from "react";
import styled from "styled-components";
import { getCurrentDate } from "../../Utils/utility";
import { Link } from "react-router-dom";
import { addToolsContext } from "../../context/tools_context";
import { mainTools } from "../../data/interfaceTools";
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
                    //remove the style on notifications link
                    mainTools[1].active = false;
                    this.context.activeToolsHandler("todolist");
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
NotificationItem.contextType = addToolsContext;
const Wrapper = styled.div``;
