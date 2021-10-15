import React, { useRef } from "react";
import { Navbar, Footer, Hero, Features, Newsletter } from "../components";
import styled from "styled-components";
const Home: React.FC = () => {
  const features = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <Navbar />
      <Hero features={features} />
      <Features features={features} />
      <Newsletter />
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
`;
export default Home;
