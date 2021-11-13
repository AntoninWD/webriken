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
        <label>Dark mode</label>
        <input
          type='checkbox'
          className={
            theme === "light-theme" ? "active-check on" : "active-check"
          }
          onClick={() => {
            toggleTheme();
          }}></input>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    padding: 1rem;
  }
  label {
    margin-right: 1rem;
  }
  .setting-overlay {
    position: absolute;
    bottom: 90px;
    left: 0;
    width: 90%;
    right: 0;
    background-color: var(--clr-grey-1);
    transition: var(--transition);
    z-index: 1;
    border: 2px solid var(--clr-grey-3);
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

  input[type="checkbox"].active-check {
    font-size: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 3rem;
    height: 1.7rem;
    background: var(--clr-bcg);
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border: 1px solid var(--clr-font-second);
  }

  input[type="checkbox"].on {
    background: var(--clr-primary-3);
  }

  input[type="checkbox"].active-check:after {
    position: absolute;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--clr-primary-3);
    -webkit-box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    bottom: 1px;
    left: 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  input[type="checkbox"].on:after {
    left: calc(100% - 1.5rem);
    background: var(--clr-white);
  }
  button {
    background-color: transparent;
  }
`;

export default Setting;
