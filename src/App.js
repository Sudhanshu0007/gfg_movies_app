import { Routes, Route } from 'react-router';
import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
