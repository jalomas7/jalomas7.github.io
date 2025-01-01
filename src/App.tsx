import React, { createRef, RefObject } from 'react';
import './App.css';
import { Home } from './Home';
import { Route, Routes, useLocation, useOutlet, useViewTransitionState } from 'react-router';
import { About } from './About';
import { Navbar } from './Navbar';
import styled from '@emotion/styled';
import { Contact } from './Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './animation.css';


const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
    nodeRef: createRef(),
  },
]

const AppContainer = styled.div`
`

function App() {
  const location = useLocation();
  const { nodeRef } =
    (routes.find((route) => route.path === location.pathname) ?? {}) as { nodeRef: RefObject<HTMLDivElement> };

  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
          >
            <div ref={nodeRef} className='page'>
              <Routes>
                {routes.map((route) => {
                  return (
                    <Route path={route.path} element={route.element} />
                  )
                })}
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </AppContainer>
    </div>
  );
}

export default App;
