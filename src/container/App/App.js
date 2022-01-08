import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Food from '../../components/Food/Food';
import Drinks from '../../components/Drinks/Drinks';
import Home from '../../components/Home/Home';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
