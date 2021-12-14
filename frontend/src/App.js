import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Photos" element={<Photos/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
