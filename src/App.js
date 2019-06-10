import React, {Component} from 'react';
// import email from '../email.png';
import './App.css';
// import Mailto from 'react-mailto'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import nested from './components/nested'
import home from './components/home'

class App extends Component {
  render(){
  return (
    <div className="App">
        <Router>
            <Route
              exact path='/'
              component={home}
            />
            <Switch>
              <Route
                exact path='/projects'
                component={nested}
              />
            </Switch>
        </Router>
    </div>
  );
  }
}

export default App;
