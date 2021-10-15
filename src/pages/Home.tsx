import React, { useRef } from "react";
import { Navbar, Footer, Hero, Features, Newsletter } from "../components";

const Home: React.FC = () => {
  const features = useRef<HTMLDivElement>(null);
  return (
    <main>
      <Navbar />
      <Hero features={features} />
      <Features features={features} />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
