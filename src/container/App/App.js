import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Food from '../Food/Food';
import Drinks from '../Drinks/Drinks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Food()} />
        <Route path="/drinks" element={Drinks()} />
      </Routes>
    </Router>
  );
};

export default App;
