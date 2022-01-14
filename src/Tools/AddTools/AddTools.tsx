import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { allTools } from "../../data/interfaceTools";
import { categories } from "../../data/toolsCategories";
import { addToolsContext } from "../../context/tools_context";
const AddTools: React.FC = () => {
  const [tools, setTools] = useState(allTools);
  const { addTool } = useContext(addToolsContext);

  useEffect(() => {
    categories[0].active = true;
  }, []);

  const filterHandler = (category: string) => {
    categories.map((e) => {
      return (e.active = false);
    });
    if (category === "all") {
      categories[0].active = true;
      setTools(allTools);
      return;
    }
    if (category === "popular") {
      categories[1].active = true;
    }
    if (category === "newest") {
      categories[2].active = true;
    }
    if (category === "coming soon") {
      categories[3].active = true;
    }

    const newTools = allTools.filter((tool) => {
      return tool.type === category;
    });

    setTools(newTools);
  };
  return (
    <Wrapper className='tools-wrapper'>
      <h2>Tools</h2>
      <div className='container'>
        <div>
          <h4>Add tools to your sidebar.</h4>
          <hr />
        </div>
        <div className='categories-container'>
          {categories.map(({ id, name, active }) => {
            return (
              <button
                key={id}
                className={`${
                  active ? "features-btn activeBtn" : "features-btn"
                }`}
                onClick={() => {
                  filterHandler(name);
                }}>
                {name}
              </button>
            );
          })}
        </div>
        <hr className='bottom-bar' />
        <div className='tools-container'>
          {tools.map((tool) => {
            return (
              <div key={tool.id} className='tool'>
                {tool.icon}

                <h5>{tool.text}</h5>
                <p>{tool.description}</p>

                <button
                  className='add-btn'
                  onClick={() => {
                    addTool(tool);
                  }}>
                  Add to sidebar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h2 {
    margin-left: 10%;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    color: var(--clr-font);
    margin-left: 5px;
    padding: 0.5rem 0;
    font-size: 20px;
    text-transform: none;
  }
  h5 {
    padding: 0.3rem 0;
    font-size: 20px;
    @media screen and (max-width: 1400px) {
      font-size: 15px;
    }
  }
  .container {
    @media only screen and (max-width: 1100px) {
      margin: 0 5% 10rem 5%;
    }
  }
  .features-btn {
    font-size: 1rem;
    padding: 15px 5rem;
    margin: 0;
    color: var(--clr-font);
    background-color: var(--clr-bgr-second);
    border: none;
    font-family: inherit;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    text-transform: capitalize;
    @media only screen and (max-width: 1350px) {
      font-size: 0.8rem;
      padding: 15px 3rem;
    }
    @media only screen and (max-width: 700px) {
      font-size: 0.8rem;
      padding: 15px 1.5rem;
    }
    @media only screen and (max-width: 460px) {
      font-size: 0.7rem;
      padding: 15px 0.6rem;
    }
    :hover {
      border-bottom: 2px solid var(--clr-primary-4);
      color: var(--clr-primary-4);
    }
  }
  .activeBtn {
    color: var(--clr-primary-4) !important;
    border-bottom: 2px solid var(--clr-primary-4) !important;
  }

  .categories-container {
    text-align: center;
  }
  .tools-container {
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3.5rem 2rem;
    justify-items: center;
    @media only screen and (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2.5rem 0;
    }

    @media only screen and (max-width: 420px) {
      grid-template-columns: 1fr;
      grid-gap: 1.5rem 0;
    }
  }
  .tool {
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  svg {
    height: 40px;
    width: 40px;
    @media only screen and (max-width: 1200px) {
      height: 25px;
      width: 25px;
    }
  }
  p {
    text-align: start;
    height: 65px;
    color: var(--clr-grey-6);
    @media screen and (max-width: 1400px) {
      font-size: 12px;
      width: 80%;
      margin-left: 10%;
    }
  }
  .add-btn {
    display: flex;
    align-items: center;
    font: unset;
    cursor: pointer;
    padding: 5px 7px;
    border-radius: 5px;
    color: var(--clr-white);
    border: none;
    background: linear-gradient(
      142deg,
      rgba(238, 106, 5, 1) 0%,
      rgba(245, 133, 5, 1) 91%
    );
    box-shadow: rgba(58, 58, 58, 0.246) 0px 5px 10px;
    font-size: 1rem;
    @media screen and (max-width: 1400px) {
      font-size: 0.8rem;
    }
  }
`;
export default AddTools;
