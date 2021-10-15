import React, { useContext } from "react";
import styled from "styled-components";
import { themeContext } from "../context/theme_context";

interface Props {
  settingModal: boolean;
}

const Setting: React.FC<Props> = ({ settingModal }) => {
  const { toggleTheme, theme } = useContext(themeContext);
  return (
    <Wrapper>
      <div
        className={
          settingModal
            ? "setting-overlay  setting-overlay-active"
            : "setting-overlay"
        }>
        <button
          className='btn-app'
          onClick={() => {
            toggleTheme();
          }}>
          Dark mode {theme === "light-theme" ? "(OFF)" : "(ON)"}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .setting-overlay {
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 90%;
    right: 0;
    background-color: var(--clr-bcg);
    transition: var(--transition);
    z-index: 1;
    border: 2px solid var(--clr-font-second);
    border-radius: 5px;
    display: flex;
    opacity: 0;
    pointer-events: none;
    margin-left: 0.5rem;
    justify-content: center;
    box-shadow: rgba(58, 58, 58, 0.383) 0px 5px 10px;
  }

  .setting-overlay-active {
    opacity: 1;
    pointer-events: visible;
  }
`;

export default Setting;
