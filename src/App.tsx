import React from 'react';
import './App.css';
import { Home } from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import { About } from './About';
import { Navbar } from './Navbar';
import styled from '@emotion/styled';
import { Contact } from './Contact';


const AppContainer = styled.div`
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
