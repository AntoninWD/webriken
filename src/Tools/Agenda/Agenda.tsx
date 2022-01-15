import React, { useContext } from "react";
import styled from "styled-components";
import { Construction } from "../../components";
import { addToolsContext } from "../../context/tools_context";

import { mainTools } from "../../data/interfaceTools";
import { Link } from "react-router-dom";
const Agenda: React.FC = () => {
  const { removeTool, activeToolsHandler } = useContext(addToolsContext);

  return (
    <Wrapper className='tools-wrapper'>
      <h1>Agenda component</h1>
      <Construction />
      <Link
        to={`/app/home`}
        className='remove-tool'
        onClick={() => {
          removeTool("Agenda");
          activeToolsHandler("agenda");
          mainTools[0].active = true;
        }}>
        Remove tool
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    position: relative;
  }
`;
export default Agenda;
