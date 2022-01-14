import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import PostTipsSideBar from "./PostTipsSideBar";
import PostTipsModal from "./PostTipsModal";
import { GiPin } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import todoImg from "../../images/undraw_Taking_notes_re_bnaf.svg";
import { addToolsContext } from "../../context/tools_context";
import { interfaceContext } from "../../context/interface_context";

import { mainTools } from "../../data/interfaceTools";
import { Link } from "react-router-dom";

type notesValue = {
  topic: string;
  importance: string;
  title: string;
  notes: string;
};

const getTopicsLocalStorage = () => {
  let topicsValue = localStorage.getItem("topics");

  if (topicsValue) {
    let storageTopics = JSON.parse(topicsValue);
    return storageTopics;
  } else {
    return [];
  }
};

const getNotesLocalStorage = () => {
  let notes = localStorage.getItem("notes");

  if (notes) {
    let storageNotes: any = JSON.parse(notes);
    return storageNotes;
  } else {
    return [];
  }
};

const PostTips: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTopicList, setCurrentTopicList] = useState<string[]>(
    getTopicsLocalStorage()
  );
  const [currentNotesList, setCurrentNotesList] = useState<notesValue[]>(
    getNotesLocalStorage()
  );
  const [topicId, setTopicId] = useState(0);
  const [currentTopic, setCurrentTopic] = useState("");
  const sortRef = useRef<HTMLSelectElement>(null);
  const { removeTool } = useContext(addToolsContext);
  const { setMain } = useContext(interfaceContext);
  const firstTopic = currentTopicList[0];

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(currentNotesList));
  }, [currentNotesList]);

  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(currentTopicList));
  }, [currentTopicList]);

  useEffect(() => {
    setCurrentTopic(firstTopic);
  }, [firstTopic]);

  const currentTopicListHandler = (t: string) => {
    setCurrentTopicList([...currentTopicList, t]);
  };

  const currentNotesListHandler = (form: notesValue) => {
    const newList = [...currentNotesList, form];
    setCurrentNotesList(newList);
    sortHandler(newList);
  };

  const currentTopicHandler = (topic: string) => {
    setCurrentTopic(topic);
  };

  const currentTopicIdHandler = (id: number) => {
    setTopicId(id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteNotesHandler = (id: number) => {
    setCurrentNotesList((prevList) => {
      return prevList.filter((_, i) => i !== id);
    });
  };

  const deleteTopicsHandler = (id: number, e: string) => {
    setTopicId(0);
    setCurrentTopicList((prevTopic) => {
      return prevTopic.filter((_, i) => i !== id);
    });

    setCurrentNotesList((prevList) => {
      return prevList.filter(({ topic }) => topic !== e);
    });
  };

  const topicHandler = (i: number) => {
    setTopicId(i);
  };
  const sortHandler = (list: notesValue[]) => {
    if (sortRef.current?.value === "alphabet") {
      setCurrentNotesList(
        [...list].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      );
    }

    if (sortRef.current?.value === "importance") {
      setCurrentNotesList(
        [...list].sort((a, b) => {
          if (a.importance === "low" && b.importance === "medium") {
            return 1;
          }
          if (a.importance === "low" && b.importance === "high") {
            return 1;
          }

          if (a.importance === "medium" && b.importance === "high") {
            return 1;
          }
          if (a.importance === "medium" && b.importance === "low") {
            return -1;
          }

          if (a.importance === "high" && b.importance === "medium") {
            return -1;
          }
          if (a.importance === "high" && b.importance === "low") {
            return -1;
          }
          return 0;
        })
      );
    }
  };

  return (
    <Wrapper className='tools-wrapper'>
      <PostTipsSideBar
        currentTopicList={currentTopicList}
        currentTopicListHandler={currentTopicListHandler}
        deleteTopicsHandler={deleteTopicsHandler}
        topicHandler={topicHandler}
        topicId={topicId}
        currentTopicHandler={currentTopicHandler}
        currentTopicIdHandler={currentTopicIdHandler}
      />
      <div className='notes-page'>
        <PostTipsModal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          currentTopicList={currentTopicList}
          currentNotesListHandler={currentNotesListHandler}
        />
        <div className='notes-top'>
          <button className='add' onClick={openModal}>
            Add Notes
          </button>
          <div className='sort'>
            <label htmlFor='sort'>Sort By</label>
            <select
              name='sort'
              ref={sortRef}
              onChange={() => sortHandler(currentNotesList)}>
              <option value='alphabet'>Title (A-Z)</option>
              <option value='importance'>Importance</option>
            </select>
          </div>
        </div>
        <hr className='bar' />
        <div className='notes-container'>
          {currentNotesList.length === 0 ? (
            <div className='add-notes'>
              <img src={todoImg} alt='add notes' />
              <h2>Add a Notes to get started!</h2>
            </div>
          ) : (
            ""
          )}
          {currentNotesList.map(({ title, topic, importance, notes }, id) => {
            if (currentTopic === topic) {
              return (
                <div key={id} className={`${importance} notes`}>
                  <GiPin />
                  <button
                    className='delete-notes'
                    onClick={() => {
                      deleteNotesHandler(id);
                    }}>
                    <FaTimes />
                  </button>
                  <h4>{title}</h4>
                  <p>{notes}</p>
                </div>
              );
            } else {
              return (
                <div className='add-notes' key={id}>
                  <img src={todoImg} alt='add notes' />
                  <h2>Add a Notes to get started!</h2>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Link
        to='/app/home'
        className='remove-tool'
        onClick={() => {
          removeTool("Post Tips");
          setMain("home");
          mainTools[0].active = true;
        }}>
        Remove tool
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "sidebar notes";
  grid-template-columns: 15rem 5fr;
  @media only screen and (max-width: 620px) {
    display: block;
  }
  .add {
    @media only screen and (max-width: 1100px) {
      float: left;
      margin-left: 2rem;
    }
    @media only screen and (max-width: 620px) {
      margin: 0 0.5rem;
    }
  }
  hr {
    margin: 1rem 0;
    margin-left: 5%;
  }

  input,
  select {
    margin: 0 5px;
    border: 1px solid var(--clr-grey-5);
    border-radius: 5px;
    padding: 2px;
    font: inherit;
    font-weight: 400;
  }

  .add-notes {
    text-align: center;
    margin-top: 10rem;
    position: absolute;
    @media only screen and (max-height: 700px) {
      margin-top: 5rem;
    }
    img {
      height: 250px;
      width: 250px;
    }
    h2 {
      @media only screen and (max-width: 1100px) {
        font-size: 1.3rem;
      }
    }
  }
  .notes-top {
    @media only screen and (max-width: 620px) {
      display: flex;
      justify-content: space-evenly;
    }
  }

  .sort {
    position: absolute;
    top: 2.5rem;
    right: 5%;
    @media only screen and (max-width: 620px) {
      position: relative;
    }
  }

  .notes-page {
    grid-area: notes;
    text-align: center;
  }
  .notes-container {
    height: calc(100vh - 200px);
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    @media only screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .notes-container::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  .notes-container::-webkit-scrollbar {
    width: 14px;
    background-color: transparent;
    @media only screen and (max-width: 650px) {
      width: 0;
    }
  }

  .notes-container::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--clr-grey-4);
  }

  .notes {
    position: relative;
    border: 3px solid var(--clr-font);
    border-radius: 10px;
    width: 90%;
    height: fit-content;
    margin: 2rem;
    box-shadow: rgba(58, 58, 58, 0.164) 0px 5px 10px;
    padding: 0.5rem 0;
    @media only screen and (max-width: 1100px) {
      margin: 2rem 0;
    }
  }

  h4 {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p {
    padding: 0 1.5rem;
    color: var(--clr-font);
  }

  .medium {
    border: 3px solid #f0d227;
  }

  .high {
    border: 3px solid #df2828;
  }

  .delete-notes {
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 1rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-7);
    cursor: pointer;
    :hover {
      color: var(--clr-secondary-2);
    }
  }

  .add {
    font: unset;
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    border: none;
    color: var(--clr-white);
    font-weight: 600;
    transition: var(--transition);
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    box-shadow: rgba(58, 58, 58, 0.164) 0px 5px 10px;
  }
`;
export default PostTips;
