import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './content/Welcome.js';
import About from './content/About.js';
import Nav from './nav/Nav.js';

class App extends React.Component {
  render() {
    return(
      <Router>
      <div className="container">
        <Nav/>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/about' component={About} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
