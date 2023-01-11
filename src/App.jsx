import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/sign-in" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignInPage />} />
        <Route path="*" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
