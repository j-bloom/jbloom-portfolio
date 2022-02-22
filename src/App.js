import React from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMePage";
import Technologies from "./Pages/TechnologiesPage";
import MyWork from "./Pages/MyWorkPage";

function App() {
  return (
    <div className="App"> 
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Technologies" element={<Technologies />} />
          <Route path="/MyWork" element={<MyWork />} />
        </Routes>
    </div>
  );
}

export default App;
