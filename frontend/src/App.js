import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Photos from './components/Photos/Photos';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route exact path="/Photos">
          <Photos/>
        </Route>
        <Route exact path="/Contact">
          <Contact/>
        </Route>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
