import React from 'react';
import './App.css';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
