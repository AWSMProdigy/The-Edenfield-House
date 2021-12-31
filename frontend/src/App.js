import './App.css';
import React from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Reservation from './components/Reservation/Reservation';
import ScriptTag from 'react-script-tag';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop.js'



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Header/>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <ScriptTag src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></ScriptTag>
    <ScriptTag src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></ScriptTag>
    <ScriptTag src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></ScriptTag>
    </>
  );
}

export default App;
