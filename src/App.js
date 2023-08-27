import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './Navbar';
import AppGame from './AppGame';
import React, { Component }  from 'react';
import SoloCreations from './routes/ProjectRoutes/SoloCreations';
function App() {
  return (
    <div className='App'>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/TetrisBomb" element={<AppGame />} />
        <Route path="/Careers/OtherProjects" element={<SoloCreations/>} />
      </Routes>
    </div>
  );
}


export default App;

//