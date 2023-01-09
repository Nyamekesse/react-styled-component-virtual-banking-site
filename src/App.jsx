import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
