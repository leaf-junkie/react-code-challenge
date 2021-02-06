import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div>
          <Router>
            <Switch>
              <Route path="/" component={() => <HomePage/>} />
              <Route exact path="/HomePage" component={() => <HomePage/>} />
              <Route exact path="/ContactPage" component={() => <ContactPage/> } />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
