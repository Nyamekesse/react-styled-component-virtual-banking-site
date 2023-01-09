import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Sidebar toggle={toggle} />}
      <Navbar toggle={toggle} />
    </>
  );
};

export default Home;