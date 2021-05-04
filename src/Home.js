import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Inicio from "./Inicio";
import Sidebar from "./components/Siderbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Home;
