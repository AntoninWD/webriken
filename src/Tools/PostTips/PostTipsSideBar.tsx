import React, { useRef } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const colors = [
  "#ec3312",
  "#009622",
  "#0080ff",
  "#f4ac1a",
  "#bf95d4",
  "#d71f5f",
  "#f9ce71",
  "#280137",
  "#a7cc7b",
  "#8d7d7d",
  "#ffbb9a",
  "#5ce1e6",
];

interface Props {
  currentTopicList: string[];
  currentTopicListHandler: (t: string) => void;
  deleteTopicsHandler: (id: number, e: string) => void;
  topicHandler: (e: number) => void;
  topicId: number;
  currentTopicHandler: (e: string) => void;
  currentTopicIdHandler: (id: number) => void;
}

const PostTipsSideBar: React.FC<Props> = ({
  currentTopicList,
  currentTopicListHandler,
  deleteTopicsHandler,
  topicHandler,
  topicId,
  currentTopicHandler,
  currentTopicIdHandler,
}) => {
  const topic = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
  };

  const addTopics = (t: string | undefined) => {
    if (!t) return;
    if (currentTopicList.length >= 12) return;
    currentTopicListHandler(t);
    currentTopicHandler(t);
    currentTopicIdHandler(0);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a topics' ref={topic} />
        <button
          type='submit'
          className='plus-button'
          onClick={() => {
            // Prevent a bug that when you click on + button it changes the active style button
            if (currentTopicList.length === 12 || topic.current?.value === "")
              return;
            addTopics(topic.current?.value);
            if (topic.current) {
              topicHandler(currentTopicList.length);
              topic.current.value = "";
            }
          }}>
          +
        </button>
      </form>
      <hr className='bar' />
      <div className='topic-list'>
        {currentTopicList.map((e, i) => {
          return (
            <div className='list' key={i}>
              <button
                className='delete'
                onClick={() => {
                  deleteTopicsHandler(i, e);
                }}>
                <FaTimes />
              </button>
              <div
                className={topicId === i ? "topic active" : "topic"}
                key={i}
                onClick={() => {
                  topicHandler(i);
                  currentTopicHandler(e);
                }}>
                <div className='topic-container'>
                  <div
                    className='color'
                    style={{ backgroundColor: colors[i] }}></div>
                  <ul className='topic-btn'>{e}</ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-bcg-second);
  border-right: 1px solid var(--clr-font-second);
  form {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    @media only screen and (max-width: 620px) {
      margin-top: 3rem;
    }
  }
  hr {
    margin: 1rem 0;
    margin-left: 5%;
  }

  input {
    width: 70%;
    padding: 0.3rem;
    margin: 0;
    border: 1px solid var(--clr-grey-4);
    border-radius: 5px;
    text-align: center;
  }
  .plus-button {
    border: none;
    background: rgb(238, 106, 5);
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    color: var(--clr-white);
    padding: 0.37rem 0.7rem;
    margin: 0;
    cursor: pointer;
    margin-left: -12px;
    font-size: 1.2rem;
    border-radius: 5px;
    box-shadow: rgba(58, 58, 58, 0.082) 0px 5px 10px;
    transition: var(--transition);
  }
  .topic-list {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
  .list {
    position: relative;
  }
  .delete {
    position: absolute;
    left: 2px;
    top: 2px;
    font-size: 0.8rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-7);
    cursor: pointer;
    :hover {
      color: var(--clr-secondary-2);
    }
  }
  .topic {
    padding: 0.7rem 10%;
    margin: 0.7rem 0;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);

    :hover {
      background-color: var(--btn-bcg);
    }
  }
  .topic-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: var(--btn-bcg) !important;
  }
  .color {
    width: 10px;
    height: 35px;
    border-radius: 25px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
export default PostTipsSideBar;
