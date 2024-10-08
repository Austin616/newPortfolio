import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WebApp from './WebApp/index';
import Navbar from '../src/Components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WebApp />} />
      </Routes>
    </Router>
  );
};

export default App;
