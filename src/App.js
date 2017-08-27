import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './content/Welcome.js';
import About from './content/About.js';
import Nav from './nav/Nav.js';
import Contact from './content/Contact.js';

class App extends React.Component {
  render() {
    return(
      <div className="app_container">
      <Router>
        <div className="router_container">
        <Nav/>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/the-site' component={About} />
          </Switch>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
