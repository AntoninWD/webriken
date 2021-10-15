import React, { useContext } from "react";
import styled from "styled-components";
import { Construction } from "../../components";
import { addToolsContext } from "../../context/tools_context";
import { interfaceContext } from "../../context/interface_context";

import { mainTools } from "../../data/interfaceTools";
import { Link } from "react-router-dom";
const Spotify: React.FC = () => {
  const { removeTool } = useContext(addToolsContext);
  const { setMain } = useContext(interfaceContext);
  return (
    <Wrapper className='tools-wrapper'>
      <h1>Spotify component</h1>
      <Construction />
      <Link
        to='/app/home'
        className='remove-tool'
        onClick={() => {
          removeTool("Spotify");
          setMain("home");
          mainTools[0].active = true;
        }}>
        Remove this tool
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
export default Spotify;
