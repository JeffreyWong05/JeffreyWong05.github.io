import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './Navbar';
import React, { Component }  from 'react';
function App() {
  return (
    <div className='App'>
    <h2>Hi, welcome to my website!</h2>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
    </div>
  );
}


export default App;

//