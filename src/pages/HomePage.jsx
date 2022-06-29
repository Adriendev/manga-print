import React from "react";
import Carrousel from "../components/Carrousel";

const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
      <Carrousel title={"All Series"} />
      <Carrousel title={"Discovery"} />
    </main>
  );
};

export default HomePage;
