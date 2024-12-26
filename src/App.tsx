import React from 'react';
import './App.css';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import { About } from './About';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
