import React from 'react';
import './style/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Calc from './pages/calc';
import Quote from './pages/quote';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
