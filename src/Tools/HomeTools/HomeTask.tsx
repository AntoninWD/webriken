import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import taskImg from "../../images/undraw_no_data_re_kwbl.svg";
import { Link } from "react-router-dom";
import { interfaceContext } from "../../context/interface_context";
import { homeContext } from "../../context/home_context";
const HomeTask: React.FC = () => {
  const { setMain } = useContext(interfaceContext);
  const { todo } = useContext(homeContext);
  const [day, setDay] = useState("");

  useEffect(() => {
    localStorage.setItem("dueTodo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    const d = new Date();
    setDay(
      `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d
        .getDate()
        .toString()
        .padStart(2, "0")}`
    );
  }, []);

  return (
    <Wrapper className='task'>
      <h4>Task Due Today</h4>
      {/* Get in todolist task that are due for today */}
      {/* also render something if array is empty */}
      <div>
        {todo.filter((e) => {
          return e.dateValue === day;
        }).length === 0 ? (
          <div className='empty-task'>
            <img src={taskImg} alt='no task' />
            <h4>You dont have any task due today!</h4>
          </div>
        ) : (
          ""
        )}

        {todo
          .filter((e) => {
            return e.dateValue === day;
          })
          .map((e, i) => {
            return <ul key={i}>{e.taskValue}</ul>;
          })}
      </div>
      <Link to='/app/todolist' onClick={() => setMain("todolist")}>
        Manage Task
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    border-radius: 5px;
    box-shadow: var(--shadow);
    border: 1px solid var(--clr-font-second);
    background-color: var(--clr-bcg);
    margin: 2rem;
    padding: 1rem;
    text-align: center;
    overflow-y: scroll;
    display: grid;
    max-height: 450px;
    grid-template-rows: 5rem 1fr 3.5rem;
    align-items: start;
    @media only screen and (max-width: 1150px) {
      height: 100%;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: var(--clr-grey-6);
    }
    h4 {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    div {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    ul {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      box-shadow: var(--shadow);
      border: 1px solid var(--clr-font-second);
      background-color: var(--clr-bcg-second);
      font-size: 1.1rem;
      width: 80%;
      border-radius: 5px;
    }
    a {
      width: 100%;
      border-radius: 5px;
      background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
     
    );
      color: var(--clr-white);
      font-weight: 600;
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
  .empty-task {
    padding: 1%;
    img {
      margin-top: 2rem;
      height: 100px;
      width: 100px;
    }
  
`;
export default HomeTask;
