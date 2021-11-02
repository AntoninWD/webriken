import React, { Dispatch } from "react";
import styled from "styled-components";

interface Props {
  profileModal: boolean;
  setStatus: Dispatch<React.SetStateAction<string>>;
  setProfileModal: Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FC<Props> = ({
  profileModal,
  setStatus,
  setProfileModal,
}) => {
  return (
    <Wrapper>
      <div className={profileModal ? "overlay overlay-active" : "overlay"}>
        <ul>
          <li
            className='btn-app'
            onClick={() => {
              setStatus("online");
              setProfileModal(false);
            }}>
            <div className={`circle online`}></div> Online
          </li>
          <li
            className='btn-app'
            onClick={() => {
              setStatus("busy");
              setProfileModal(false);
            }}>
            <div className={`circle busy`}></div> Busy
          </li>
          <li
            className='btn-app'
            onClick={() => {
              setStatus("break");
              setProfileModal(false);
            }}>
            <div className={`circle break`}></div>Break
          </li>
          <li
            className='btn-app'
            onClick={() => {
              setStatus("offline");
              setProfileModal(false);
            }}>
            <div className={`circle offline`}></div>Offline
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .overlay {
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 90%;
    right: 0;
    background-color: var(--clr-grey-1);
    transition: var(--transition);
    z-index: 3;
    border: 2px solid var(--clr-grey-3);
    border-radius: 5px;
    display: flex;
    opacity: 0;
    margin-left: 0.5rem;
    justify-content: center;
    box-shadow: rgba(58, 58, 58, 0.383) 0px 5px 10px;
    pointer-events: none;
  }
  li {
    background-color: transparent;
    width: 100% !important;
  }

  .overlay-active {
    opacity: 1;
    pointer-events: visible;
  }
  .circle {
    border-radius: 35px;
    margin-right: 10px;
    width: 10px;
    height: 10px;
  }
`;
export default Profile;
