import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router';
import Welcome from './content/Welcome.js';
import About from './content/About.js';
import Nav from './nav/Nav.js';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <Nav/>
        <Router>
          <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
