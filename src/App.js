import React, { useState, useEffect } from 'react';
import './App.css';
import sample from "./v4u.mp4";
import Header from "./MyComponents/Header.js";
import { Footer } from "./MyComponents/Footer.js";
import { About } from "./MyComponents/About.js";
import Home from "./MyComponents/Home"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header title="Track-Work" search={false} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

