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
                <div>
                  <h5>{tool.text}</h5>
                  <p>{tool.description}</p>
                </div>
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
  @media only screen and (max-width: 900px) {
    display: none;
  }
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
    border: 2px solid var(--clr-grey-7);
    margin: 0 10% 10rem 10%;
    border-radius: 5px;
    background-color: var(--clr-bcg);
    padding: 1rem;
    height: 75vh;
    box-shadow: rgba(58, 58, 58, 0.383) 0px 5px 10px;
    @media screen and (max-width: 1400px) {
      margin: 0 3% 10rem 3%;
    }
  }
  .features-btn {
    font-size: 1rem;
    padding: 15px 5rem;
    margin: 0;
    color: var(--clr-font-second);
    background-color: var(--clr-bgr-second);
    border: none;
    font-family: inherit;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    text-transform: capitalize;
    @media only screen and (max-width: 1200px) {
      font-size: 0.8rem;
      padding: 15px 3rem;
    }
    :hover {
      border-bottom: 2px solid var(--clr-grey-4);
      color: var(--clr-grey-4);
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
  }
  .tool {
    width: 170px;
    text-align: center;
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
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid var(--clr-primary-4);
    padding: 5px;
    border-radius: 5px;
    color: var(--clr-primary-4);
    font-weight: 600;
    transition: var(--transition);
    margin-left: 27px;
    @media screen and (max-width: 1400px) {
      font-size: 0.8rem;
    }
    :hover {
      background-color: var(--clr-primary-4);
      color: var(--clr-white);
      border: 2px solid var(--clr-primary-4);
    }
  }
`;
export default AddTools;
