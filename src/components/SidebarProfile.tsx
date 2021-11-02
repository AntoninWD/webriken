import React, { useState, useContext } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Setting from "./Setting";
import { FaDoorOpen } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import { interfaceContext } from "../context/interface_context";
import { mainTools } from "../data/interfaceTools";
import { useAuth0 } from "@auth0/auth0-react";
const SidebarProfile: React.FC = () => {
  const { setMain } = useContext(interfaceContext);
  const [status, setStatus] = useState("online");
  const [profileModal, setProfileModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      <hr className='bar top-bar' />
      <Profile
        setStatus={setStatus}
        profileModal={profileModal}
        setProfileModal={setProfileModal}
      />
      <Setting settingModal={settingModal} />
      <div className='status'>
        <div
          className={`profile ${status}`}
          onClick={() => {
            setProfileModal(!profileModal);
            if (settingModal) setSettingModal(false);
          }}>
          {isUser && user?.picture && (
            <img src={user?.picture} alt={user.name} />
          )}
        </div>
        {isUser && user?.nickname && <h5>{user.nickname.split(" ")[0]}</h5>}
      </div>

      <div className='profile-btns'>
        <button
          className='setting-btn'
          onClick={() => {
            setSettingModal(!settingModal);
            if (profileModal) setProfileModal(false);
          }}>
          <GoGear />
        </button>
        <Link
          to='/'
          className='setting-btn'
          onClick={() => {
            setMain("home");
            mainTools[0].active = true;
          }}>
          <FaDoorOpen />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: profile;
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  color: var(--clr-white);
  @media only screen and (max-width: 1650px) {
    display: block;
  }

  h5 {
    font-size: 0.9rem;
    margin: 0;
    margin-left: 10px;
    font-weight: 400;
    color: var(--clr-white);
    @media only screen and (max-width: 1650px) {
      font-size: 80%;
    }
  }
  svg {
    display: block;
    height: 17px;
    width: 17px;
    margin: 5px;
    color: var(--clr-white);
  }

  .profile {
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 35px;
    cursor: pointer;
    transition: var(--transition);
    :hover {
      box-shadow: var(--clr-black) 0px 4px 10px;
    }
    img {
      width: 100%;
    }
    @media only screen and (max-width: 1650px) {
      height: 25px;
      width: 25px;
    }
  }
  .profile-btns {
    display: flex;
    position: absolute;
    right: 15px;
    @media only screen and (max-width: 1650px) {
      position: static;
      justify-content: center;
    }
  }

  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    @media only screen and (max-width: 1650px) {
      justify-content: center;
    }
  }
  .setting-btn {
    border: none;
    cursor: pointer;
    transition: var(--transition);
    background-color: var(--grey-1);
  }

  .online {
    background-color: var(--clr-active);
    border: 3px solid var(--clr-active);
  }
  .busy {
    background-color: var(--clr-busy);
    border: 3px solid var(--clr-busy);
  }
  .break {
    background-color: var(--clr-break);
    border: 3px solid var(--clr-break);
  }
  .offline {
    background-color: var(--clr-offline);
    border: 3px solid var(--clr-offline);
  }
  .top-bar {
    position: absolute;
    top: 0;
    width: 90%;
    margin-left: 3%;
  }
`;
export default SidebarProfile;
