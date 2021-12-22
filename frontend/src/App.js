import './App.css';
import React from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Reservation from './components/Reservation/Reservation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='routes-container'>
        <div className='content-wrap'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Photos" element={<Photos/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Reservation" element={<Reservation/>}/>
      </Routes>
        </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
