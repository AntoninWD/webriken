import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { interfaceContext } from "../context/interface_context";
import { mainTools } from "../data/interfaceTools";
import logo from "../images/Logo1-01.png";
const SidebarTop: React.FC = () => {
  const { setMain, mainComponent } = useContext(interfaceContext);
  const topTools = mainTools.slice(0, 3);
  return (
    <Wrapper>
      <div>
        <img src={logo} alt='Webriken' />
      </div>
      {topTools.map(({ id, text, component, icon, active }, i) => {
        return (
          <Link
            key={i}
            className={`${
              mainComponent === component || active
                ? "btn-app active"
                : "btn-app"
            }`}
            to={`/app/${component}`}
            onClick={() => {
              setMain(component);
            }}>
            {icon}
            {text}
          </Link>
        );
      })}

      <hr className='bar' />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  margin-left: 1rem;
  grid-area: top;
  svg {
    margin-right: 10px;
    pointer-events: none;
  }
  img {
    height: 60px;
    float: left;
    margin-bottom: 1rem;
    margin-top: 5px;
  }
`;
export default SidebarTop;
