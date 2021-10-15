import React, { useRef } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

type notesValue = {
  topic: string;
  importance: string;
  title: string;
  notes: string;
};

interface Props {
  closeModal: () => void;
  isModalOpen: boolean;
  currentTopicList: string[];
  currentNotesListHandler: (notesValue: notesValue) => void;
}
const PostTipsModal: React.FC<Props> = ({
  closeModal,
  isModalOpen,
  currentTopicList,
  currentNotesListHandler,
}) => {
  const notesForm = {
    topic: useRef<HTMLSelectElement>(null),
    importance: useRef<HTMLSelectElement>(null),
    title: useRef<HTMLInputElement>(null),
    notes: useRef<HTMLTextAreaElement>(null),
  };

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    if (
      !notesForm.topic.current ||
      !notesForm.importance.current ||
      !notesForm.title.current ||
      !notesForm.notes.current
    )
      return;
    const notesFormValues = {
      topic: notesForm.topic.current.value,
      importance: notesForm.importance.current.value,
      title: notesForm.title.current.value,
      notes: notesForm.notes.current.value,
    };
    currentNotesListHandler(notesFormValues);

    closeModal();
    e.target.reset();
  };
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        } `}>
        <div className='modal-container'>
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes />
          </button>
          <div>
            <h4>Add Notes</h4>
            <hr className='bar' />
          </div>
          <form onSubmit={handleSubmit} id='form'>
            <div className='value'>
              <label htmlFor='topic'>Topic: </label>
              <select name='topic' ref={notesForm.topic} required>
                {currentTopicList.map((e, i) => {
                  return (
                    <option value={e} key={i}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='value'>
              <label htmlFor='importance'>Importance: </label>
              <select name='importance' ref={notesForm.importance} required>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>
            <div className='value'>
              <label htmlFor='title'>Title: </label>
              <input type='text' name='title' ref={notesForm.title} required />
            </div>
            <div className='value note'>
              <label htmlFor='notes'>Your Notes Here: </label>
              <textarea name='notes' ref={notesForm.notes} required></textarea>
            </div>
            <div>
              <button className='add' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: var(--clr-bcg);
    border-radius: 5px;
    padding: 1rem 3rem;
    width: 40vw;
    height: fit-content;
    min-width: fit-content;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-secondary-3);
    cursor: pointer;
  }
  h4 {
    margin: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    font-weight: 600;
  }

  textarea {
    padding: 1rem;
    font: inherit;
    font-weight: 400;
  }

  .value {
    display: flex;
    margin: 0.7rem;
    align-items: center;
  }
  .note {
    display: grid;
  }
`;
export default PostTipsModal;
