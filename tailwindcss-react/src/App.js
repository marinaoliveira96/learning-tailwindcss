import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/menu" component={Menu}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
